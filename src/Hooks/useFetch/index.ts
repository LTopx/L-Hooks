import { useState } from 'react';
import type { FetchConfig, FetchReturn } from './types';
import { transformFetchOptions } from './utils';

function useFetch<T = any>({
  url,
  method,
  headers = { 'Content-Type': 'application/json; charset=utf-8' },
}: FetchConfig): FetchReturn {
  const [loading, setLoading] = useState(false);

  const run = (data: any = {}) => {
    const { fetchURL, fetchConfig } = transformFetchOptions({ url, method, headers, data });

    return new Promise<T>((resolve, reject) => {
      setLoading(true);
      fetch(fetchURL, fetchConfig)
        .then((response) => {
          if (response.headers.get('content-type')?.includes('/json')) return response.json();
          return response.text();
        })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  return { run, loading };
}

export default useFetch;
