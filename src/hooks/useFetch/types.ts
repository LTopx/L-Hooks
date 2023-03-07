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
   * 请求headers：默认"Content-Type": "application/json"
   * @default "Content-Type: application/json"
   */
  headers?: HeadersInit;
}

export interface FetchReturn {
  run: (...params: any) => Promise<any>;
  loading: boolean;
}
