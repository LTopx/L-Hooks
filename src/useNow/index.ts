import * as React from 'react';

export interface UseNowOptions<Controls extends boolean> {
  /**
   * 是否支持控制
   */
  controls?: Controls;
}

export function useNow(options?: UseNowOptions<false>): Date;
export function useNow(options: UseNowOptions<true>): {
  time: Date;
  pause: () => void;
  resume: () => void;
};
export function useNow(options: UseNowOptions<boolean> = {}) {
  const { controls = false } = options;
  const [nowTime, setNowTime] = React.useState<Date>(new Date());
  const timerRef = React.useRef<NodeJS.Timer | null>(null);

  // 暂停timer
  const pause = React.useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // 开始运行、继续timer
  const resume = React.useCallback(() => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setNowTime(new Date());
    }, 1000);
  }, []);

  React.useEffect(() => {
    resume();

    return pause;
  }, []);

  if (controls) return { time: nowTime, pause, resume };

  return nowTime;
}

export type UseNowReturn = ReturnType<typeof useNow>;
