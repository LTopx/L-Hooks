/**
 * title: 基础用法
 * description: 2000ms后触发一次
 */

import { useTimeout } from 'l-hooks';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  useTimeout(() => {
    setCount(1);
  }, 2000);

  return <>count: {count}</>;
};
