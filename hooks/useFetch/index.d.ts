import type { FetchConfig, FetchReturn } from './types';
declare function useFetch<T = any>({ url, method, headers, }: FetchConfig): FetchReturn;
export default useFetch;
