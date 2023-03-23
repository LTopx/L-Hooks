import * as React from 'react';
import { isNumber } from '../utils';
import type { UseTimeoutReturn } from './types';

const useTimeout = (fn: () => void, timeout: number = 0): UseTimeoutReturn => {
  const timerCallback = React.useRef(fn);
  timerCallback.current = React.useMemo(() => fn, [fn]);

  const timerRef = React.useRef<NodeJS.Timer | null>(null);

  // 清除定时器
  const clear = React.useCallback(() => {
    if (!timerRef.current) return;
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  React.useEffect(() => {
    if (!isNumber(timeout) || timeout < 0) return;

    timerRef.current = setTimeout(timerCallback.current, timeout);

    return clear;
  }, []);

  return { clear };
};

export default useTimeout;
