/**
 * title: 基础用法
 * description: 通过`run()`方法调用来发起请求获取数据
 */
import { Button, List, Space } from 'antd';
import { useFetch } from 'l-hooks';
import React, { useState } from 'react';

export default () => {
  const [data, setData] = useState([]);

  const { loading, run } = useFetch<{ data: any }>({
    url: 'https://api.vvhan.com/api/hotlist',
    method: 'get',
  });

  const getData = async () => {
    setData([]);
    const { data } = await run({ type: 'baiduRD' });
    setData(data.slice(0, 5));
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Button type="primary" loading={loading} onClick={getData}>
        点击获取数据
      </Button>
      <List
        size="small"
        bordered
        loading={loading}
        dataSource={data}
        renderItem={(item: any) => <List.Item>{item.title}</List.Item>}
      />
    </Space>
  );
};
