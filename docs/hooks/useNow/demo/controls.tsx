/**
 * title: 可控制
 * description: 传入`controls:true`可以控制计时的暂停、继续
 */

import { Button, Space } from 'antd';
import { useNow } from 'l-hooks';
import React from 'react';

export default () => {
  const { time, pause, resume } = useNow({ controls: true });

  return (
    <Space direction="vertical">
      <div>{String(time)}</div>
      <Space>
        <Button onClick={pause}>暂停</Button>
        <Button type="primary" onClick={resume}>
          继续
        </Button>
      </Space>
    </Space>
  );
};
