import { useState } from 'react';
import type { FetchConfig, FetchReturn } from './types';
import { transformFetchOptions } from './utils';

function useFetch<T = any>({ url, method, headers }: FetchConfig): FetchReturn<T> {
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState<AbortController>();

  const run = (data: any = {}) => {
    const abortController = new AbortController();
    const { signal } = abortController;
    setController(abortController);

    const { fetchURL, fetchConfig } = transformFetchOptions({ url, method, headers, data });

    return new Promise<T>((resolve, reject) => {
      setLoading(true);
      fetch(fetchURL, { ...fetchConfig, signal })
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
          setController(undefined);
        });
    });
  };

  const cancel = () => controller?.abort();

  return { loading, run, cancel };
}

export default useFetch;
