---
nav: Hooks
group: 基础
order: 5
toc: content
---

# useTimeout

可快速处理 setTimeout 功能的 Hook。Hook 卸载时自动清除 timeout 避免内存泄漏

## 代码演示

#### 基础用法

<code src="./demo/basic.tsx"></code>

#### 可手动清除

<code src="./demo/clear.tsx"></code>

## API

```typescript
const { clear } = useTimeout(
  fn: () => void,
  timeout?: number,
);
```

### Params

| 属性    | 描述         | 类型                    | 默认值 |
| ------- | ------------ | ----------------------- | ------ |
| fn      | 待执行函数   | `() => void`            | -      |
| timeout | 延迟执行时间 | `number` \| `undefined` | 0      |

### Result

| 属性  | 描述                | 类型         |
| ----- | ------------------- | ------------ |
| clear | 清除 timeout 定时器 | `() => void` |
