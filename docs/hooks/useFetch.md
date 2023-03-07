---
order: 0
---

# useFetch

封装的 fetch 请求数据方法，是一个可以异步数据管理的 Hooks。

## 代码演示

### 基础用法

```tsx
import { Button } from 'antd';
import { useEffect } from 'react';
import useFetch from '../../src/Hooks/useFetch';

export default () => {
  useEffect(() => {
    console.log(useFetch, 'useFetch');
  }, []);

  return (
    <div>
      <Button>点击测试</Button>
    </div>
  );
};

const MountComponent = () => {
  useMount(() => {
    alert('mount 阶段被执行了');
  });
  return <div>新组件挂载了</div>;
};
```

## API

```typescript
const [state, { toggle, set, setTrue, setFalse }] = useBoolean(
  defaultValue?: boolean,
);
```

### Params

| 参数         | 说明                     | 类型      | 默认值  |
| ------------ | ------------------------ | --------- | ------- |
| defaultValue | 可选项，传入默认的状态值 | `boolean` | `false` |

### Result

| 参数    | 说明     | 类型      |
| ------- | -------- | --------- |
| state   | 状态值   | `boolean` |
| actions | 操作集合 | `Actions` |

### Actions

| 参数     | 说明         | 类型                       |
| -------- | ------------ | -------------------------- |
| toggle   | 切换 state   | `() => void`               |
| set      | 设置 state   | `(value: boolean) => void` |
| setTrue  | 设置为 true  | `() => void`               |
| setFalse | 设置为 false | `() => void`               |
