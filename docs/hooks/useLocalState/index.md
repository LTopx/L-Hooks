---
nav: Hooks
group:
  title: 状态
  order: 1
order: 1
toc: content
---

# useLocalState

一个看起来和用起来都跟 useState 差不多的 Hook。结合了 localstorage 可以方便的进行状态管理的持久化管理。

## 代码演示

#### 基础用法

<code src="./demo/basic.tsx"></code>

#### 跨组件响应

<code src="./demo/other.tsx"></code>

## API

```typescript
// 创建store
const store: LocalStore<T> = createLocalStore<T = unknown>(value: T, localStorageKey: string);

// 管理状态
const [state, setState] = useLocalState<T = unknown>(store: LocalStore<T>)
```
