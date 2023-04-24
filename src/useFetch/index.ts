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
  // fetch timeout timer
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

    setLoading(true);

    return fetch(context.url, { ...fetchConfig, signal: abortRef.current?.signal })
      .then(async (response) => {
        if (!response.ok) throw response;

        if (pumb && response.body) return pumb(response.body.getReader());

        const headers = response.headers;
        const contentType = headers.get('content-type');
        const contentDisposition = headers.get('content-disposition');

        const result =
          contentType &&
          (contentType?.indexOf('application/json') !== -1 ||
            contentType?.indexOf('text/plain') !== -1)
            ? response.json()
            : contentDisposition?.indexOf('attachment') !== -1
            ? response.blob()
            : response;

        return result;
      })
      .catch(async (err) => {
        const contentType = err.headers?.get('content-type');
        const errResult =
          contentType && contentType?.indexOf('application/problem+json') !== -1
            ? await err.json()
            : err;

        throw errResult;
      })
      .finally(() => {
        setLoading(false);
        abortRef.current = undefined;
      });
  };

  return { loading, run, cancel };
}

export default useFetch;
