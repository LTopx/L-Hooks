import { Animals, Gan, lunarInfo, nStr1, nStr2, nStr3, sTermInfo, Zhi } from './dic';

/**
 * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
 * @param y lunar Year
 * @return Number (0-12)
 * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
 */
export const leapMonth = (y: number) => {
  //闰字编码 \u95f0
  return lunarInfo[y - 1900] & 0xf;
};

/**
 * 返回农历y年闰月的天数 若该年没有闰月则返回0
 * @param y lunar Year
 * @return Number (0、29、30)
 * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
 */
export const leapDays = (y: number) => {
  if (leapMonth(y)) {
    return lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
  }
  return 0;
};

/**
 * 返回农历y年一整年的总天数
 * @param y lunar Year
 * @return Number
 * @eg:var count = calendar.lYearDays(1987) ;//count=387
 */
export const lYearDays = (y: number) => {
  let i,
    sum = 348;
  for (i = 0x8000; i > 0x8; i >>= 1) {
    sum += lunarInfo[y - 1900] & i ? 1 : 0;
  }
  return sum + leapDays(y);
};

/**
 * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
 * @param y lunar Year
 * @param m lunar Month
 * @return Number (-1、29、30)
 * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
 */
export const monthDays = (y: number, m: number) => {
  if (m > 12 || m < 1) {
    return -1;
  } //月份参数从1至12，参数错误返回-1
  return lunarInfo[y - 1900] & (0x10000 >> m) ? 30 : 29;
};

/**
 * 农历年份转换为干支纪年
 * @param  lYear 农历年的年份数
 * @return Cn string
 */
export const toGanZhiYear = (lYear: number) => {
  let ganKey = (lYear - 3) % 10;
  let zhiKey = (lYear - 3) % 12;
  if (ganKey === 0) ganKey = 10; //如果余数为0则为最后一个天干
  if (zhiKey === 0) zhiKey = 12; //如果余数为0则为最后一个地支
  return Gan[ganKey - 1] + Zhi[zhiKey - 1];
};

/**
 * 传入公历(!)y年获得该年第n个节气的公历日期
 * @param y y公历年(1900-2100)
 * @param n n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
 * @return day Number
 * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
 */
export const getTerm = (y: number, n: number) => {
  if (y < 1900 || y > 2100 || n < 1 || n > 24) {
    return -1;
  }
  const _table = sTermInfo[y - 1900];
  const _calcDay = [];
  for (let index = 0; index < _table.length; index += 5) {
    const chunk = parseInt('0x' + _table.substr(index, 5)).toString();
    _calcDay.push(chunk[0], chunk.substr(1, 2), chunk[3], chunk.substr(4, 2));
  }
  return parseInt(_calcDay[n - 1]);
};

/**
 * 公历月、日判断所属星座
 * @param  cMonth [description]
 * @param  cDay [description]
 * @return Cn string
 */
export const toAstro = (cMonth: any, cDay: any) => {
  const s =
    '\u6469\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u6469\u7faf';
  const arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
  return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + '\u5ea7'; //座
};

/**
 * 传入offset偏移量返回干支
 * @param offset 相对甲子的偏移量
 * @return Cn string
 */
export const toGanZhi = (offset: number) => {
  return Gan[offset % 10] + Zhi[offset % 12];
};

/**
 * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
 * @param y year
 * @return Cn string
 * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
 */
export const getAnimal = (y: number) => {
  return Animals[(y - 4) % 12];
};

/**
 * 传入农历数字月份返回汉语通俗表示法
 * @param m lunar month
 * @return Cn string
 * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
 */
export const toChinaMonth = (m: number) => {
  // 月 => \u6708
  if (m > 12 || m < 1) {
    return -1;
  } //若参数错误 返回-1
  let s = nStr3[m - 1];
  s += '\u6708'; //加上月字
  return s;
};

/**
 * 传入农历日期数字返回汉字表示法
 * @param d lunar day
 * @return Cn string
 * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
 */
export const toChinaDay = (d: number) => {
  //日 => \u65e5
  let s;
  switch (d) {
    case 10:
      s = '\u521d\u5341';
      break;
    case 20:
      s = '\u4e8c\u5341';
      break;
    case 30:
      s = '\u4e09\u5341';
      break;
    default:
      s = nStr2[Math.floor(d / 10)];
      s += nStr1[d % 10];
  }
  return s;
};
