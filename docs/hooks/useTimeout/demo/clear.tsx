/**
 * title: 可手动清除
 * description: Hook卸载时会自动清除timeout。也可在触发前手动清除timeout
 */

import { Button, Space } from 'antd';
import { useTimeout } from 'l-hooks';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  const { clear } = useTimeout(() => {
    setCount(1);
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
