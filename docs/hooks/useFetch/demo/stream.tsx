/**
 * title: 处理流数据
 * description: 可以通过配置`pump`方法来拦截处理响应的流数据
 */
import { Button, Space } from 'antd';
import { useFetch } from 'l-hooks';
import React from 'react';

const textDecoder = new TextDecoder();

export default () => {
  // 流数据处理方式demo
  const pumb = async (reader: ReadableStreamDefaultReader<Uint8Array>) => {
    return reader.read().then((res) => {
      if (res.done) return;
      const lines = textDecoder
        .decode(new Uint8Array(res.value))
        .split('\n')
        .filter((item) => item.trim() !== '');

      for (const line of lines) {
        const message = line.replace(/^data: /, '');
        if (message === '[DONE]') return console.log('结束了');
        try {
          const content = JSON.parse(message).choices[0].delta.content;
          if (content) console.log(content, 'conetnt');
        } catch (error) {}
      }
    });
  };

  const { loading, run } = useFetch<{ data: any }>({
    url: 'https://api.vvhan.com/api/hotlist',
    method: 'get',
    pumb,
  });

  const getData = async () => {
    await run({ type: 'baiduRD' });
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Button type="primary" loading={loading} onClick={getData}>
        点击获取数据
      </Button>
    </Space>
  );
};
