import Qs from 'qs';
import { FetchRequestMethod } from './types';

interface transformOptions {
  url: string;
  method: FetchRequestMethod;
  headers?: HeadersInit;
  data: any;
}

interface FetchConfig extends RequestInit {
  headers: HeadersInit;
}

export const transformFetchOptions = ({
  url,
  method,
  headers: customHeaders,
  data,
}: transformOptions) => {
  /** 构造请求头 */
  const fetchHeaders: HeadersInit = {};
  try {
    if (customHeaders) Object.assign(fetchHeaders, customHeaders);
  } catch {}

  let fetchURL = url;
  let fetchConfig: FetchConfig = { method, headers: fetchHeaders };

  if (method?.toUpperCase() === 'GET') {
    if (Object.entries(data).length) fetchURL = `${fetchURL}?${Qs.stringify(data)}`;
  } else {
    fetchConfig = { ...fetchConfig, body: JSON.stringify(data) };
  }

  return { fetchURL, fetchConfig };
};
