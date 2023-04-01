import * as React from 'react';
import { useUpdate } from '../useUpdate';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace AtomNameSpace {
  export type Set<T> = globalThis.Set<T>;
}

type SetAtomAction<S> = S | ((prevAtom: S) => S);
type Dispatch<A> = (value: A) => void;
type CreateAtomReturn<T> = Atom<T> & { atomEffectList: AtomNameSpace.Set<() => void> };

export interface Atom<T> {
  value: T;
}

export type UseAtomReturn<T> = [T, Dispatch<SetAtomAction<T>>];

/**
 * 创建原子状态
 * @param value 原子状态的初始值
 */
export function createAtom<T = unknown>(value: T): CreateAtomReturn<T> {
  return {
    value,
    atomEffectList: new Set(),
  };
}

/**
 * 使用原子状态
 * @param atom 传入原子状态
 * @returns [atom, setAtom] atom为原子状态的值，setAtom为设置原子状态的方法
 */
export function useAtom<T = unknown>(atom: CreateAtomReturn<T>): UseAtomReturn<T> {
  const forceUpdate = useUpdate();

  const setAtom = (args: SetAtomAction<T>) => {
    const prevAtom = atom.value;
    let nextAtom: T;

    if (typeof args === 'function') {
      nextAtom = (args as (prevAtom: T) => T)(prevAtom);
    } else {
      nextAtom = args;
    }

    // 如若相等，则无需更新原子状态的值，也无需通知其他组件re-render
    if (prevAtom === nextAtom) return;

    atom.value = nextAtom;
    // 通知其他绑定了该原子状态的组件render
    atom.atomEffectList.forEach((effect: any) => {
      effect();
    });
  };

  React.useEffect(() => {
    atom.atomEffectList.add(forceUpdate);
    return () => {
      atom.atomEffectList.delete(forceUpdate);
    };
  });

  return [atom.value, setAtom];
}
