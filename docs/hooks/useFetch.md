---
order: 0
toc: content
---

# useFetch

封装的 fetch 请求数据方法，是一个可以异步数据管理的 Hooks。

## 代码演示

### 基础用法

```tsx
/**
 * title: 基础用法
 * description: 通过`run()`方法调用来发起请求获取数据
 */
import { Button, List, Space } from 'antd';
import { useFetch } from 'lx-hooks';
import { useState } from 'react';

export default () => {
  const [data, setData] = useState([]);

  const { run, loading } = useFetch({
    url: 'https://api.vvhan.com/api/hotlist',
    method: 'get',
    headers: {},
  });

  const getData = async () => {
    setData([]);
    const { data } = await run<{ data: any }>({ type: 'baiduRD' });
    setData(data.slice(0, 5));
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Button type="primary" loading={loading} onClick={getData}>
        点击获取百度热点
      </Button>
      <List
        size="small"
        bordered
        loading={loading}
        dataSource={data}
        renderItem={(item) => <List.Item>{item.title}</List.Item>}
      />
    </Space>
  );
};
```

## API

```typescript
const {
  run: (...params: TParams) => Promise<TParams>,
  loading: boolean,
} = useFetch<TResponse>({
    url: string,
    method: FetchRequestMethod,
    headers?: HeadersInit,
});
```

### Result

| 参数    | 说明               | 类型                                       |
| ------- | ------------------ | ------------------------------------------ |
| run     | 执行请求，传递参数 | `(...params: TParams) => Promise<TParams>` |
| loading | 请求是否正在执行   | `boolean`                                  |

### Options

| 参数    | 说明         | 类型                 | 默认值 |
| ------- | ------------ | -------------------- | ------ |
| url     | 请求地址 url | `string`             | -      |
| method  | 请求 method  | `FetchRequestMethod` | GET    |
| headers | 请求 headers | `HeadersInit`        | -      |
