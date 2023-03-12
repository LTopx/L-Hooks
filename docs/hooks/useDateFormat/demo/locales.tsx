/**
 * title: Locales
 * description: 支持传入语言时区来进行格式化
 */

import { useDateFormat, useNow } from 'l-hooks';
import React from 'react';

export default () => {
  const now = useNow();
  const formatted = useDateFormat(now, 'YYYY-MM-DD hh:mm:ss', { locales: 'en-US' });

  return <>en-US: {formatted}</>;
};
