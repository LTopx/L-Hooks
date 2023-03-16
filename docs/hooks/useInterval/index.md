---
nav: Hooks
group: 基础
order: 6
toc: content
---

# useInterval

可快速处理 setInterval 功能的 Hook。Hook 卸载时自动清除 interval 避免内存泄漏

## 代码演示

#### 基础用法

<code src="./demo/basic.tsx"></code>

#### 可手动清除

<code src="./demo/clear.tsx"></code>

## API

```typescript
const { clear } = useInterval(
  fn: () => void,
  interval?: number,
  options?: UseIntervalOptions
);
```

### Params

| 属性     | 描述         | 类型                    | 默认值 |
| -------- | ------------ | ----------------------- | ------ |
| fn       | 待执行函数   | `() => void`            | -      |
| interval | 执行间隔时间 | `number` \| `undefined` | `0`    |
| options  | 计时器配置   | `UseIntervalOptions`    | -      |

### Options

| 属性      | 描述         | 类型      | 默认值  |
| --------- | ------------ | --------- | ------- |
| immediate | 是否立即执行 | `boolean` | `false` |

### Result

| 属性  | 描述                 | 类型         |
| ----- | -------------------- | ------------ |
| clear | 清除 interval 定时器 | `() => void` |
