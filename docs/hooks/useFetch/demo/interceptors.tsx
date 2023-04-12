/**
 * title: 拦截器
 * description: 通过配置`beforeFetch`方法，在请求前对请求配置和参数进行处理
 */
import { Button, Space } from 'antd';
import type { BeforeFetchContext } from 'l-hooks';
import { useFetch } from 'l-hooks';
import React from 'react';

export default () => {
  const beforeFetch = async (ctx: BeforeFetchContext) => {
    ctx.headers['Authorization'] = '124124';
    return ctx;
  };

  const { loading, run } = useFetch<{ data: any }>({
    url: 'http://localhost:3000/api/common/hotlist-pre',
    method: 'get',
    headers: { 'Project-Name': 'l-hooks' },
    beforeFetch,
  });

  const getData = async () => {
    const res = await run();
    console.log(res.data, 'data');
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Button type="primary" loading={loading} onClick={getData}>
        点击获取数据
      </Button>
    </Space>
  );
};
