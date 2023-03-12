---
nav: Hooks
group: 基础
order: 3
toc: content
---

# useNow

实时获取当前时间：Date。

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

#### 可控制

<code src="./demo/controls.tsx"></code>

## API

```typescript
const time = useNow();

const { time, pause, resume } = useNow({ controls: true });
```

### Result

| 属性    | 描述     | 类型      |
| ------- | -------- | --------- |
| time    | 当前时间 | `Date`    |
| Actions | 时间操作 | `Actions` |

### Options

| 属性     | 描述                           | 类型     |
| -------- | ------------------------------ | -------- |
| controls | 是否可以对当前时间计数进行操作 | `string` |

### Actions

| 属性   | 描述         | 类型         |
| ------ | ------------ | ------------ |
| time   | 当前时间     | `Date`       |
| pause  | 暂停时间计数 | `() => void` |
| resume | 继续时间计数 | `() => void` |
