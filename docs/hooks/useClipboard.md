---
order: 1
toc: content
---

# useClipboard

复制文本

## 代码演示

### 基础用法

```tsx
/**
 * title: 基础用法
 * description: 可以复制string、number、object
 */
import { Button, message } from 'antd';
import { useClipboard } from 'lx-hooks';

export default () => {
  const { copy } = useClipboard();

  const handleCopy = () => {
    copy('内容')
      .then(() => {
        message.success({ content: '复制成功', key: 'success' });
      })
      .catch(() => {
        message.error({ content: '复制失败', key: 'fail' });
      });
  };

  return (
    <Button type="primary" onClick={handleCopy}>
      点击复制
    </Button>
  );
};
```

## API

```typescript
const {
  copy: (value: any) => Promise<void>
} = useClipboard();
```

## Result

| 参数 | 说明     | 类型                            |
| ---- | -------- | ------------------------------- |
| copy | 复制内容 | `(value: any) => Promise<void>` |
