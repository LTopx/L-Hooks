import * as React from 'react';
import type { FetchConfig, FetchReturn } from './types';
import { transformFetchOptions } from './utils';

function useFetch<T = any>({ url, method, headers, pumb }: FetchConfig): FetchReturn<T> {
  const [loading, setLoading] = React.useState(false);
  const controllerRef = React.useRef<AbortController>();

  const run = (data: any = {}) => {
    const abortController = new AbortController();
    const { signal } = abortController;
    controllerRef.current = abortController;

    const { fetchURL, fetchConfig } = transformFetchOptions({ url, method, headers, data });

    return new Promise<T>((resolve, reject) => {
      setLoading(true);
      fetch(fetchURL, { ...fetchConfig, signal })
        .then((response) => {
          if (!response.ok) return reject(response);
          if (pumb && response.body) return pumb(response.body.getReader());
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
          controllerRef.current = undefined;
        });
    });
  };

  const cancel = React.useCallback(() => controllerRef.current?.abort(), []);

  return { loading, run, cancel };
}

export default useFetch;
