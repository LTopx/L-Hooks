import * as React from 'react';
import type { BeforeFetchContext, FetchConfig, FetchReturn } from './types';
import { transformFetchOptions } from './utils';

function useFetch<T>({ url, method, headers, beforeFetch, pumb }: FetchConfig): FetchReturn<T> {
  const [loading, setLoading] = React.useState(false);
  const controllerRef = React.useRef<AbortController>();

  const run = async (data: any = {}) => {
    controllerRef.current = new AbortController();

    let { fetchURL, fetchConfig } = transformFetchOptions({ url, method, headers, data });

    const context: BeforeFetchContext = {
      url: fetchURL,
      ...fetchConfig,
    };

    if (beforeFetch) Object.assign(context, await beforeFetch({ url: fetchURL, ...fetchConfig }));

    return new Promise<T>((resolve, reject) => {
      setLoading(true);
      fetch(context.url, { ...fetchConfig, signal: controllerRef.current?.signal })
        .then(async (response) => {
          if (!response.ok) return reject(response);
          if (pumb && response.body) return pumb(response.body.getReader());
          const ans = await (response.headers.get('content-type')?.includes('/json')
            ? response.json()
            : response.text());
          return resolve(ans);
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
