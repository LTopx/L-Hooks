---
nav: Hooks
group: 基础
order: 2
toc: content
---

# useCalendar

能够将标准格式时间快速转换为中国农历节气。公历参数区间 1900.1.31~2100.12.31

## 代码演示

#### 基础用法

<code src="./demo/basic.tsx"></code>

## API

```typescript
interface LunarDateInfo {
  Animal: string;
  IDayCn: string;
  IMonthCn: string;
  Term: string | null;
  astro: string;
  cYear: number;
  cMonth: number;
  cDay: number;
  date: string;
  festival: string;
  gzYear: string;
  gzMonth: string;
  gzDay: string;
  isLeap: boolean;
  isTerm: boolean;
  isToday: boolean;
  lYear: number;
  lMonth: number;
  lDay: number;
  lunarDate: string;
  lunarFestival: string | null;
  nWeek: number;
  ncWeek: string;
}

const { solar2lunar } = useCalendar();
const result: LunarDateInfo = solar2lunar(new Date());
```

### Result

| 属性          | 描述                                             | 类型      |
| ------------- | ------------------------------------------------ | --------- |
| Animal        | 生肖。(仅能大致转换，精确划分生肖分界线是“立春”) | `string`  |
| IDayCn        | 农历日期                                         | `string`  |
| IMonthCn      | 农历月份                                         | `string`  |
| Term          | 24 节气                                          | `string`  |
| astro         | 星座                                             | `string`  |
| cYear         | 阳历年份                                         | `number`  |
| cMonth        | 阳历月份                                         | `number`  |
| cDay          | 阳历日期                                         | `number`  |
| date          | 阳历年月日                                       | `string`  |
| festival      | 阳历节日                                         | `string`  |
| gzYear        | 干支纪年-年                                      | `string`  |
| gzMonth       | 干支纪年-月                                      | `string`  |
| gzDay         | 干支纪年-日                                      | `string`  |
| isLeap        | 是否为闰月                                       | `boolean` |
| isTerm        | 是否为 24 节气                                   | `boolean` |
| lYear         | 农历年份                                         | `number`  |
| lMonth        | 农历月份                                         | `number`  |
| lDay          | 农历日期                                         | `number`  |
| lunarDate     | 农历年月日                                       | `string`  |
| lunarFestival | 农历节日                                         | `string`  |
| nWeek         | 星期几-数字格式                                  | `number`  |
| ncWeek        | 星期几-中文格式                                  | `string`  |
