import * as React from 'react';
import { festival, lFestival, nStr1, solarTerm } from './dic';
import {
  getAnimal,
  getTerm,
  lYearDays,
  leapDays,
  leapMonth,
  monthDays,
  toAstro,
  toChinaDay,
  toChinaMonth,
  toGanZhi,
  toGanZhiYear,
} from './utils';

/**
 * @1900-2100区间内的公历、农历互转
 * @charset UTF-8
 * @Version 0.0.1
 * @公历转农历：solar2lunar
 */

export interface LunarDateInfo {
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
  lDay: number;
  lMonth: number;
  lYear: number;
  lunarDate: string;
  lunarFestival: string | null;
  nWeek: number;
  ncWeek: string;
}

const useCalendar = () => {
  /**
   * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
   * !important! 公历参数区间1900.1.31~2100.12.31
   * @param date Date
   * @return JSON object
   * @eg:console.log(calendar.solar2lunar(1987,11,01));
   */
  const solar2lunar = React.useCallback(
    (date: Date | string | number): LunarDateInfo | undefined => {
      if (!date) return;
      if (String(new Date(date)) === 'Invalid Date') return;
      const formatDate = new Date(date);

      let y = formatDate.getFullYear();
      let m = formatDate.getMonth() + 1;
      let d = formatDate.getDate();

      //年份限定、上限
      if (y < 1900 || y > 2100) return;

      //公历传参最下限
      if (y === 1900 && m === 1 && d < 31) return;

      //未传参  获得当天
      let objDate;
      if (!y) {
        objDate = new Date();
      } else {
        objDate = new Date(y, parseInt(m as any) - 1, d);
      }
      let i,
        leap = 0,
        temp = 0;
      //修正ymd参数
      y = objDate.getFullYear();
      m = objDate.getMonth() + 1;
      d = objDate.getDate();
      let offset =
        (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) -
          Date.UTC(1900, 0, 31)) /
        86400000;
      for (i = 1900; i < 2101 && offset > 0; i++) {
        temp = lYearDays(i);
        offset -= temp;
      }
      if (offset < 0) {
        offset += temp;
        i--;
      }

      //星期几
      let nWeek = objDate.getDay(),
        cWeek = nStr1[nWeek];
      //数字表示周几顺应天朝周一开始的惯例
      if (nWeek === 0) {
        nWeek = 7;
      }
      //农历年
      const year = i;
      leap = leapMonth(i); //闰哪个月
      let isLeap = false;

      //效验闰月
      for (i = 1; i < 13 && offset > 0; i++) {
        //闰月
        if (leap > 0 && i === leap + 1 && isLeap === false) {
          --i;
          isLeap = true;
          temp = leapDays(year); //计算农历闰月天数
        } else {
          temp = monthDays(year, i); //计算农历普通月天数
        }
        //解除闰月
        if (isLeap === true && i === leap + 1) {
          isLeap = false;
        }
        offset -= temp;
      }
      // 闰月导致数组下标重叠取反
      if (offset === 0 && leap > 0 && i === leap + 1) {
        if (isLeap) {
          isLeap = false;
        } else {
          isLeap = true;
          --i;
        }
      }
      if (offset < 0) {
        offset += temp;
        --i;
      }
      //农历月
      const month = i;
      //农历日
      const day = offset + 1;
      //天干地支处理
      const sm = m - 1;
      const gzY = toGanZhiYear(year);

      // 当月的两个节气
      // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
      const firstNode = getTerm(y, m * 2 - 1); //返回当月「节」为几日开始
      const secondNode = getTerm(y, m * 2); //返回当月「节」为几日开始

      // 依据12节气修正干支月
      let gzM = toGanZhi((y - 1900) * 12 + m + 11);
      if (d >= firstNode) {
        gzM = toGanZhi((y - 1900) * 12 + m + 12);
      }

      //传入的日期的节气与否
      let isTerm = false;
      let Term = null;
      if (firstNode === d) {
        isTerm = true;
        Term = solarTerm[m * 2 - 2];
      }
      if (secondNode === d) {
        isTerm = true;
        Term = solarTerm[m * 2 - 1];
      }
      //日柱 当月一日与 1900/1/1 相差天数
      const dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
      const gzD = toGanZhi(dayCyclical + d - 1);
      //该日期所属的星座
      const astro = toAstro(m, d);

      const solarDate = y + '-' + m + '-' + d;
      const lunarDate = year + '-' + month + '-' + day;

      const festivalDate = m + '-' + d;
      let lunarFestivalDate = month + '-' + day;

      // 农历节日修正：农历12月小月则29号除夕，大月则30号除夕
      // 此处取巧修正：当前为农历12月29号时增加一次判断并且把lunarFestivalDate设置为12-30以正确取得除夕
      // 天朝农历节日遇闰月过前不过后的原则，此处取农历12月天数不考虑闰月
      // 农历润12月在本工具支持的200年区间内仅1574年出现
      if (month === 12 && day === 29 && monthDays(year, month) === 29) {
        lunarFestivalDate = '12-30';
      }

      return {
        date: solarDate,
        lunarDate: lunarDate,
        festival: festival[festivalDate] ? festival[festivalDate].title : null,
        lunarFestival: lFestival[lunarFestivalDate] ? lFestival[lunarFestivalDate].title : null,
        lYear: year,
        lMonth: month,
        lDay: day,
        Animal: getAnimal(year),
        IMonthCn: (isLeap ? '\u95f0' : '') + toChinaMonth(month),
        IDayCn: toChinaDay(day),
        cYear: y,
        cMonth: m,
        cDay: d,
        gzYear: gzY,
        gzMonth: gzM,
        gzDay: gzD,
        isLeap: isLeap,
        nWeek: nWeek,
        ncWeek: '\u661f\u671f' + cWeek,
        isTerm: isTerm,
        Term: Term,
        astro: astro,
      };
    },
    []
  );

  return { solar2lunar };
};

export default useCalendar;
