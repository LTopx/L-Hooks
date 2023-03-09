---
order: 2
toc: content
---

# useCalendar

能够将标准格式时间快速转换为中国农历节气。公历参数区间 1900.1.31~2100.12.31

## 代码演示

### 基础用法

<code src="./demo/basic.tsx"></code>

## API

```typescript
interface LunarDateInfo {
  Animal: string;
  IDayCn: string;
  IMonthCn: string;
  Term: string | null;
  astro: string;
  cDay: number;
  cMonth: number;
  cYear: number;
  date: string;
  festival: string;
  gzDay: string;
  gzMonth: string;
  gzYear: string;
  isLeap: boolean;
  isTerm: boolean;
  isToday: boolean;
  lDay: number;
  lMonth: number;
  lYear: number;
  lunarDate: string;
  lunarFestival: string | null;
  nWeek: number;
  ncWeek: string;
}

const { solar2lunar } = useCalendar();
const result: LunarDateInfo = solar2lunar(new Date());
```

### Result

| 属性          | 描述                                   | 类型                                                                                           |
| ------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------- |
| online        | 网络是否为在线                         | `boolean`                                                                                      |
| since         | `online` 最后改变时间                  | `Date`                                                                                         |
| rtt           | 当前连接下评估的往返时延               | `number`                                                                                       |
| type          | 设备使用与所述网络进行通信的连接的类型 | `bluetooth` \| `cellular` \| `ethernet` \| `none` \| `wifi` \| `wimax` \| `other` \| `unknown` |
| downlink      | 有效带宽估算（单位：兆比特/秒）        | `number`                                                                                       |
| downlinkMax   | 最大下行速度（单位：兆比特/秒）        | `number`                                                                                       |
| saveData      | 用户代理是否设置了减少数据使用的选项   | `boolean`                                                                                      |
| effectiveType | 网络连接的类型                         | `slow-2g` \| `2g` \| `3g` \| `4g`                                                              |
