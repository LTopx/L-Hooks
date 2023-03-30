export type FetchRequestMethod = 'get' | 'post' | 'delete' | 'put';

export interface BeforeFetchContext extends RequestInit {
  url: string;
  headers: HeadersInit;
}

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

  /**
   * 支持流数据处理
   */
  pumb?: (reader: ReadableStreamDefaultReader<Uint8Array>) => void;

  /**
   * 请求前处理。支持处理请求地址和headers
   */
  beforeFetch?: (ctx: BeforeFetchContext) => Promise<Partial<BeforeFetchContext>>;
}

export interface FetchReturn<T> {
  /**
   * 请求状态：是否处于请求中
   */
  loading: boolean;

  /**
   * 执行请求
   */
  run: (...params: any) => Promise<T>;

  /**
   * 取消请求
   */
  cancel: () => void;
}
