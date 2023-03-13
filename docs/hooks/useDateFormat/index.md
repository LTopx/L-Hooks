---
nav: Hooks
group: 基础
order: 4
toc: content
---

# useDateFormat

格式化日期时间。

## 代码演示

#### 基础用法

<code src="./demo/basic.tsx"></code>

#### Locales

<code src="./demo/locales.tsx"></code>

## API

```typescript
const time = useDateFormat(
  date: DateLike,
  formatStr?: string,
  options?: UseDateFormatOptions
);
```

### Params

| 属性      | 描述                                              | 类型                   | 默认值   |
| --------- | ------------------------------------------------- | ---------------------- | -------- |
| date      | 需要格式化的日期 / 类日期                         | `DateLike`             | -        |
| formatStr | 格式化模板                                        | `string`               | HH:mm:ss |
| options   | 额外配置，目前支持传入 locales 按语言和区域格式化 | `UseDateFormatOptions` | -        |

### Options

| 属性    | 描述                             | 类型                   | 默认值          |
| ------- | -------------------------------- | ---------------------- | --------------- |
| locales | 代表了一种语言或者区域的语言标记 | `Intl.LocalesArgument` | 当地默认 locale |

### Formats

| 属性 | 输出          | 描述                    |
| ---- | ------------- | ----------------------- |
| YY   | 23            | 两位数年份              |
| YYYY | 2023          | 四位数年份              |
| M    | 1-12          | 月份                    |
| MM   | 01-12         | 月份，两位数            |
| MMM  | 3 月          | 缩写月份                |
| MMMM | 三月          | 月份全称                |
| D    | 1-31          | 日期                    |
| DD   | 01-31         | 日期，两位数            |
| H    | 0-23          | 小时                    |
| HH   | 00-23         | 小时，两位数            |
| h    | 1-12          | 小时，12 小时制         |
| hh   | 01-12         | 小时，12 小时制，两位数 |
| m    | 0-59          | 分钟                    |
| mm   | 00-59         | 分钟，两位数            |
| s    | 0-59          | 秒钟                    |
| ss   | 00-59         | 秒钟，两位数            |
| SSS  | 000-999       | 毫秒，三位数            |
| d    | 0-6           | 星期（从周日为 0 开始） |
| dd   | 日-六         | 星期（locale 省略写法） |
| ddd  | 周日-周六     | 星期（locale 简写）     |
| dddd | 星期日-星期六 | 星期（locale 完整名称） |
