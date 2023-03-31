import * as React from 'react';
import { useUpdate } from '../useUpdate';

export interface Store<T> {
  value: T;
}

type SetStateAction<S> = S | ((prevState: S) => S);

type Dispatch<A> = (value: A) => void;

export type AtomReturn<T> = [T, Dispatch<SetStateAction<T>>];

type CreateStoreReturn<T> = Store<T> & { effectList: any };

/**
 * 创建原子状态
 * @param value 原子状态的初始值
 */
export function createStore<T = unknown>(value: T): CreateStoreReturn<T> {
  return {
    value,
    effectList: new Set(),
  };
}

export function useAtom<T = unknown>(store: CreateStoreReturn<T>): AtomReturn<T> {
  const forceUpdate = useUpdate();

  const setState = (value: T | ((prevState: T) => T)) => {
    if (typeof value === 'function') {
      const transformStoreValue: T = (value as any)(store.value);
      if (transformStoreValue === value) return;
      store.value = transformStoreValue;
    } else {
      if (store.value === value) return;
      store.value = value;
    }

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

  return [store.value, setState];
}
