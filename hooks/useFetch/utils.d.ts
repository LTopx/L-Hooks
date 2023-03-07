import { FetchRequestMethod } from './types';
interface transformOptions {
    url: string;
    method: FetchRequestMethod;
    headers: HeadersInit;
    data: any;
}
export declare const transformFetchOptions: ({ url, method, headers, data }: transformOptions) => {
    fetchURL: string;
    fetchConfig: RequestInit;
};
export {};
