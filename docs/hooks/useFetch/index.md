---
nav: Hooks
group:
  title: 基础
  order: 0
order: 0
toc: content
---

# useFetch

封装的 fetch 请求数据方法，是一个可以异步数据管理的 Hooks。支持取消请求，处理流数据；还可以配置拦截器对配置和数据进行处理

## 代码演示

#### 基础用法

<code src="./demo/basic.tsx"></code>

#### 取消响应

<code src="./demo/cancel.tsx"></code>

#### 处理 stream 流数据

<code src="./demo/stream.tsx"></code>

#### 拦截器

<code src="./demo/interceptors.tsx"></code>

## API

```typescript
const {
  loading: boolean,
  run: (...params: TParams) => Promise<TParams>,
  cancel: () => void,
} = useFetch<TResponse>({
    url: string,
    method: FetchRequestMethod,
    headers?: HeadersInit,
    timeout?: number,
    pumb?: (reader: ReadableStreamDefaultReader<Uint8Array>) => void,
    beforeFetch?: (ctx: BeforeFetchContext) => Promise<Partial<BeforeFetchContext>>;
});
```

### Result

| 参数    | 说明               | 类型                                       |
| ------- | ------------------ | ------------------------------------------ |
| loading | 请求是否正在执行   | `boolean`                                  |
| run     | 执行请求，传递参数 | `(...params: TParams) => Promise<TParams>` |
| cancel  | 取消正在发送的请求 | `() => void`                               |

### Options

| 参数        | 说明                 | 类型                                                                | 默认值 |
| ----------- | -------------------- | ------------------------------------------------------------------- | ------ |
| url         | 请求地址 url         | `string`                                                            | -      |
| method      | 请求 Method          | `FetchRequestMethod`                                                | GET    |
| headers     | 请求 Headers         | `HeadersInit`                                                       | -      |
| timeout     | 请求 超时时间(ms)    | `number`                                                            | 6000   |
| pumb        | 流数据处理方法       | `(reader: ReadableStreamDefaultReader<Uint8Array>) => void`         | -      |
| beforeFetch | 请求前处理配置和参数 | `(ctx: BeforeFetchContext) => Promise<Partial<BeforeFetchContext>>` | -      |
