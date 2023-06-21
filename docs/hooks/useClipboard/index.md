---
nav: Hooks
group: 基础
order: 1
toc: content
---

# useClipboard

复制文本。优先采取 `navigator.clipboard` 方式，如果不支持则采用 `textarea` 方式。

## 代码演示

#### 基础用法

<code src="./demo/basic.tsx"></code>

## API

```typescript
const {
  isCopied: boolean,
  copy: (value: any) => void
} = useClipboard(timeout = 2000);
```

### Params

| 属性    | 描述           | 类型     | 默认值 |
| ------- | -------------- | -------- | ------ |
| timeout | 复制成功的间隔 | `number` | `2000` |

### Result

| 属性     | 描述         | 类型                   |
| -------- | ------------ | ---------------------- |
| isCopied | 是否复制成功 | `boolean`              |
| copy     | 复制内容     | `(value: any) => void` |
