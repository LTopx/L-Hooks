/**
 * title: 基础用法
 * description: 可传入自定义format来定义返回的时间格式
 */

import { useDateFormat, useNow } from 'l-hooks';
import React from 'react';

export default () => {
  const now = useNow();
  const formatted = useDateFormat(now, 'YYYY-MM-DD hh:mm:ss dddd');

  return <>{formatted}</>;
};
