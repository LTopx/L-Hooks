/**
 * title: 基础用法
 * description: 通过`solar2lunar(date:Date)`方法调用来获取传入日期的农历节气信息
 */

import { Button, Divider, Space } from 'antd';
import { useCalendar } from 'l-hooks';
import React, { useState } from 'react';

export default () => {
  const { solar2lunar } = useCalendar();
  const [data, setData] = useState('');

  const getData = () => {
    console.log(solar2lunar(new Date()), 'xx');
    setData(JSON.stringify(solar2lunar(new Date())));
  };

  return (
    <Space direction="vertical">
      <Button type="primary" onClick={getData}>
        获取农历节气
      </Button>
      {!!data && (
        <>
          <Divider orientation="left">结果</Divider>
          <div>{data}</div>
        </>
      )}
    </Space>
  );
};
