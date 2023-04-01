---
nav: Hooks
group:
  title: 状态
  order: 1
order: 0
toc: content
---

# useAtom

一个管理原子状态的 Hook，能够像 `React.useState` 一样使用

## 代码演示

#### 基础用法

<code src="./demo/basic.tsx"></code>

#### 跨组件响应

<code src="./demo/other.tsx"></code>

## API

```typescript
// 创建atom
const atom: Atom<T> = createAtom<T = unknown>(value: T);

// 管理使用Atom
const [state, setState] = useAtom<T = unknown>(atom: Atom<T>)
```
