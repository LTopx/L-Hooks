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
  copy: (value: any) => void
} = useClipboard();
```

### Result

| 参数 | 说明     | 类型                   |
| ---- | -------- | ---------------------- |
| copy | 复制内容 | `(value: any) => void` |
