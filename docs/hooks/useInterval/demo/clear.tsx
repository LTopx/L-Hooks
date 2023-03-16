/**
 * title: 可手动清除
 * description: Hook卸载时会自动清除interval。可以手动清除interval
 */

import { Button, Space } from 'antd';
import { useInterval } from 'l-hooks';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  const { clear } = useInterval(() => {
    setCount(count + 1);
  }, 2000);

  return (
    <Space direction="vertical">
      <div>count: {count}</div>
      <Button type="primary" onClick={clear}>
        Clear
      </Button>
    </Space>
  );
};
