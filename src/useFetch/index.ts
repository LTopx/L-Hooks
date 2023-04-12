import * as React from 'react';
import type { BeforeFetchContext, FetchConfig, FetchReturn } from './types';
import { transformFetchOptions } from './utils';

function useFetch<T>({
  url,
  method,
  headers,
  timeout = 60000,
  beforeFetch,
  pumb,
}: FetchConfig): FetchReturn<T> {
  const [loading, setLoading] = React.useState(false);
  const abortRef = React.useRef<AbortController>();
  const timerRef = React.useRef<NodeJS.Timeout>();

  const cancel = React.useCallback(() => abortRef.current?.abort(), []);

  const run = async (data: any = {}) => {
    abortRef.current = new AbortController();

    let { fetchURL, fetchConfig } = transformFetchOptions({ url, method, headers, data });

    const context: BeforeFetchContext = {
      url: fetchURL,
      ...fetchConfig,
    };

    if (beforeFetch) Object.assign(context, await beforeFetch({ url: fetchURL, ...fetchConfig }));

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null as any;
    }

    if (timeout) {
      timerRef.current = setTimeout(() => {
        cancel();
      }, timeout);
    }

    return new Promise<T>((resolve, reject) => {
      setLoading(true);
      fetch(context.url, { ...fetchConfig, signal: abortRef.current?.signal })
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
          abortRef.current = undefined;
        });
    });
  };

  return { loading, run, cancel };
}

export default useFetch;
