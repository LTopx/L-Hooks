import * as React from 'react';
import { useUpdate } from '../useUpdate';
import { isUndef } from '../utils';

export interface LocalStore<T> {
  value: T;
  key: string;
}

export type LocalStateReturn<T> = [T, (value: T) => void];

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

/**
 * 创建本地原子状态
 * @param value 原子状态的初始值
 * @param localStorageKey 本地存储的key
 */
function createLocalStore<T = unknown>(
  value: T,
  localStorageKey: string
): LocalStore<T> & { effectList: any } {
  return {
    value,
    key: localStorageKey,
    effectList: new Set(),
  };
}

/**
 * 关键点在于，每个页面调用useLocalState时，需要往当前store的effectList中添加一个可强制更新的函数：即setState
 */
function useLocalState<T = unknown>(
  store: LocalStore<T> & { effectList: any }
): LocalStateReturn<T> {
  const forceUpdate = useUpdate();

  const localStoreValue = getLocalStorage<T>(store.key);
  const defaultStoreValue = store.value;

  const setState = (newValue: T) => {
    if (store.value === newValue) return;

    store.value = newValue;
    setLocalStorage(store.key, newValue);

    store.effectList.forEach((effect: any) => {
      effect();
    });
  };

  React.useEffect(() => {
    store.effectList.add(forceUpdate);
    return () => {
      store.effectList.delete(forceUpdate);
    };
  });

  return [localStoreValue || defaultStoreValue, setState];
}

export { useLocalState, createLocalStore };
