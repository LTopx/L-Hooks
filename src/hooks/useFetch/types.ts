export type FetchRequestMethod = 'get' | 'post' | 'delete' | 'put';

export interface FetchConfig {
  /**
   * 请求地址
   */
  url: string;

  /**
   * 请求method：支持get，post，delete
   */
  method: FetchRequestMethod;

  /**
   * 请求headers：无默认值
   */
  headers?: HeadersInit;
}

export interface FetchReturn {
  /**
   * 请求状态：是否处于请求中
   */
  loading: boolean;

  /**
   * 执行请求
   */
  run: (...params: any) => Promise<any>;

  /**
   * 取消请求
   */
  cancel: () => void;
}
