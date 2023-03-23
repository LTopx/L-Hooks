import * as React from 'react';
import { isNumber } from '../utils';
import type { UseIntervalOptions, UseIntervalReturn } from './types';

const useInterval = (
  fn: () => void,
  interval: number = 0,
  options: UseIntervalOptions = { immediate: false }
): UseIntervalReturn => {
  const timerCallback = React.useRef(fn);
  timerCallback.current = React.useMemo(() => fn, [fn]);

  const timerRef = React.useRef<NodeJS.Timer | null>(null);

  // 清除定时器
  const clear = React.useCallback(() => {
    if (!timerRef.current) return;
    clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  React.useEffect(() => {
    if (!isNumber(interval) || interval < 0) return;

    if (options.immediate) timerCallback.current();

    timerRef.current = setInterval(() => {
      timerCallback.current();
    }, interval);

    return clear;
  }, []);

  return { clear };
};

export default useInterval;
