import { useAtom } from '../useAtom';
import { isUndef } from '../utils';

export interface LocalStore<T> {
  value: T;
  key: string;
}

type LocalStoreReturn<T> = LocalStore<T> & { effectList: any };

type SetStateAction<S> = S | ((prevState: S) => S);

type Dispatch<A> = (value: A) => void;

export type LocalStateReturn<T> = [T, Dispatch<SetStateAction<T>>];

/**
 * 创建本地原子状态
 * @param value 原子状态的初始值
 * @param localStorageKey 本地存储的key
 */
export function createLocalStore<T = unknown>(
  value: T,
  localStorageKey: string
): LocalStoreReturn<T> {
  return {
    value,
    key: localStorageKey,
    effectList: new Set(),
  };
}

function getLocalStorage<T>(key: string) {
  try {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value) as T;
  } catch (error) {}

  return null as T;
}

const setLocalStorage = (key: string, value: any) => {
  if (isUndef(value)) {
    localStorage.removeItem(key);
  } else {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }
};

export function useLocalState<T = unknown>(store: LocalStoreReturn<T>): LocalStateReturn<T> {
  const [state, setState] = useAtom(store);

  const localStoreValue = getLocalStorage<T>(store.key);

  const setLocalState = (value: T | ((prevState: T) => T)) => {
    if (typeof value === 'function') {
      const transformStoreValue: T = (value as any)(localStoreValue || state);
      if (transformStoreValue === value) return;
      setState(transformStoreValue);
      setLocalStorage(store.key, transformStoreValue);
    } else {
      if (state === value) return;
      setState(value);
      setLocalStorage(store.key, value);
    }

    store.effectList.forEach((effect: any) => {
      effect();
    });
  };

  return [localStoreValue || state, setLocalState];
}
