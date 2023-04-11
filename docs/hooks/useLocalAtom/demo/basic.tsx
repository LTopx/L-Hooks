/**
 * title: 基础用法
 * description: 创建原子化 `localAtom` 并通过 `useLocalAtom` 使用，即可进行状态的原子化管理
 */
import { Button } from 'antd';
import { useLocalAtom } from 'l-hooks';
import React from 'react';
import { myAtom } from './store';

export default () => {
  const [state, setState] = useLocalAtom(myAtom);

  const handleChange = () => {
    const xx = { age: Math.random() };
    // setState(Math.random());
    // setState((state) => {
    //   const newState = structuredClone(state);
    //   newState.age = Math.random();
    //   return newState;
    // });
    setState(xx);
  };

  return (
    <div>
      <div>{state.age}</div>
      <Button type="primary" onClick={handleChange}>
        变更
      </Button>
    </div>
  );
};
