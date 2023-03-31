/**
 * title: 基础用法
 * description: 创建原子化store并通过 `useAtom` 使用，即可进行状态的原子化管理
 */
import { Button } from 'antd';
import { useAtom } from 'l-hooks';
import React from 'react';
import { myState } from './state';

export default () => {
  const [state, setState] = useAtom(myState);

  const handleChange = () => {
    setState((state) => {
      return state + 1;
    });
  };

  return (
    <div>
      <div>{state}</div>
      <Button type="primary" onClick={handleChange}>
        变更
      </Button>
    </div>
  );
};
