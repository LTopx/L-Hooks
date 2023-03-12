---
nav: Hooks
group:
  title: 基础
  order: 0
order: 0
toc: content
---

# useFetch

封装的 fetch 请求数据方法，是一个可以异步数据管理的 Hooks。

## 代码演示

#### 基础用法

<code src="./demo/basic.tsx"></code>

#### 取消响应

<code src="./demo/cancel.tsx"></code>

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
});
```

### Result

| 参数    | 说明               | 类型                                       |
| ------- | ------------------ | ------------------------------------------ |
| loading | 请求是否正在执行   | `boolean`                                  |
| run     | 执行请求，传递参数 | `(...params: TParams) => Promise<TParams>` |
| cancel  | 取消正在发送的请求 | `() => void`                               |

### Options

| 参数    | 说明         | 类型                 | 默认值 |
| ------- | ------------ | -------------------- | ------ |
| url     | 请求地址 url | `string`             | -      |
| method  | 请求 Method  | `FetchRequestMethod` | GET    |
| headers | 请求 Headers | `HeadersInit`        | -      |
