import { useAtom } from '../useAtom';
import { isUndef } from '../utils';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace AtomNameSpace {
  export type Set<T> = globalThis.Set<T>;
}

type SetLocalAtomAction<S> = S | ((prevLocalAtom: S) => S);
type Dispatch<A> = (value: A) => void;
type CreateLocalAtomReturn<T> = LocalAtom<T> & { atomEffectList: AtomNameSpace.Set<() => void> };

export interface LocalAtom<T> {
  value: T;
  key: string;
}

export type UseLocalAtomReturn<T> = [T, Dispatch<SetLocalAtomAction<T>>];

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
 * @param key 本地存储的key
 */
export function createLocalAtom<T = unknown>(value: T, key: string): CreateLocalAtomReturn<T> {
  return {
    value,
    key,
    atomEffectList: new Set(),
  };
}

/**
 * 使用本地原子状态
 * @param localAtom 传入本地原子状态
 * @returns [localAtom, setLocalAtom] localAtom为本地原子状态的值，setLocalAtom为设置本地原子状态的方法
 */
export function useLocalAtom<T = unknown>(
  localAtom: CreateLocalAtomReturn<T>
): UseLocalAtomReturn<T> {
  const [state, setState] = useAtom(localAtom);

  const localAtomValue = getLocalStorage<T>(localAtom.key);

  const setLocalAtom = (args: SetLocalAtomAction<T>) => {
    const prevLocalAtom = localAtom.value;
    let nextLocalAtom: T;

    if (typeof args === 'function') {
      const localAtomValue = getLocalStorage<T>(localAtom.key);
      nextLocalAtom = (args as (prevLocalAtom: T) => T)(localAtomValue || prevLocalAtom);
    } else {
      nextLocalAtom = args;
    }

    // fix: 只有当前值和后值都不为引用类型时才进行全等比较，否则直接赋值即可
    if (
      typeof prevLocalAtom !== 'object' &&
      typeof nextLocalAtom !== 'object' &&
      prevLocalAtom === nextLocalAtom
    ) {
      return;
    }

    setState(nextLocalAtom);
    setLocalStorage(localAtom.key, nextLocalAtom);

    localAtom.atomEffectList.forEach((effect: any) => {
      effect();
    });
  };

  return [localAtomValue || state, setLocalAtom];
}
