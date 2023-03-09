import { Button, Space } from 'antd';
import { useCalendar } from 'l-hooks';
import React, { useState } from 'react';

export default () => {
  const { solar2lunar } = useCalendar();
  const [data, setData] = useState('');

  const getData = () => {
    console.log(solar2lunar(new Date('2023-03-08')), 'xx');
    setData(JSON.stringify(solar2lunar(new Date('2023-03-08'))));
  };

  return (
    <Space direction="vertical">
      <Button type="primary" onClick={getData}>
        获取农历
      </Button>
      <div>{data}</div>
    </Space>
  );
};
