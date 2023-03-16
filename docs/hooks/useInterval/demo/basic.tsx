/**
 * title: 基础用法
 * description: 每2000ms触发一次
 */

import { useInterval } from 'l-hooks';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 2000);

  return <>count: {count}</>;
};
