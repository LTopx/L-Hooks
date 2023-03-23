export type DateLike = Date | number | string | undefined;

export interface UseDateFormatOptions<Controls extends boolean> {
  /**
   * The locale(s) to used for dd/ddd/dddd/MMM/MMMM format
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
   */
  locales?: Intl.LocalesArgument;

  /**
   * 是否支持控制
   */
  controls?: Controls;
}
