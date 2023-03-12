import { useEffect, useState } from 'react';

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
  const [nowTime, setNowTime] = useState<Date>();
  const [timer, setTimer] = useState<NodeJS.Timer>();

  // 开始运行
  const startTimer = () => {
    setNowTime(new Date());
    const interval = setInterval(() => {
      setNowTime(new Date());
    }, 1000);
    setTimer(interval);
  };

  // 暂停timer
  const pause = () => {
    if (!timer) return;
    clearInterval(timer);
    setTimer(undefined);
  };

  // 继续timer
  const resume = () => {
    if (timer) return;
    startTimer();
  };

  useEffect(() => {
    startTimer();
  }, []);

  // 退出时清除timer
  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  if (controls) return { time: nowTime, pause, resume };

  return nowTime;
}

export type UseNowReturn = ReturnType<typeof useNow>;
