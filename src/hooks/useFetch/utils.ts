import Qs from 'qs';
import { FetchRequestMethod } from './types';

interface transformOptions {
  url: string;
  method: FetchRequestMethod;
  headers: HeadersInit;
  data: any;
}

export const transformFetchOptions = ({ url, method, headers, data }: transformOptions) => {
  const baseURL = '';
  let fetchURL = baseURL + url;
  let fetchConfig: RequestInit = { method, headers };

  if (method?.toUpperCase() === 'GET') {
    if (Object.entries(data).length) fetchURL = `${fetchURL}?${Qs.stringify(data)}`;
  } else {
    fetchConfig = { ...fetchConfig, body: JSON.stringify(data) };
  }

  return { fetchURL, fetchConfig };
};
