/**
 * title: 取消响应
 * description: 通过`cancel()`方法调用来发起请求获取数据
 */
import { Button, List, Space } from 'antd';
import { useFetch } from 'l-hooks';
import React, { useState } from 'react';

export default () => {
  const [data, setData] = useState([]);

  const { loading, run, cancel } = useFetch<{ data: any }>({
    url: 'https://api.vvhan.com/api/hotlist',
    method: 'get',
  });

  const getData = async () => {
    setData([]);
    const { data } = await run({ type: 'zhihuHot' });
    setData(data.slice(0, 5));
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Space>
        <Button type="primary" loading={loading} onClick={getData}>
          点击获取数据
        </Button>
        <Button onClick={cancel}>取消</Button>
      </Space>

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
