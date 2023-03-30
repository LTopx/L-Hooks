/**
 * title: 基础用法
 * description: 创建原子化store并通过 `useLocalState` 使用，即可进行状态的原子化管理
 */
import { Button } from 'antd';
import { useLocalState } from 'l-hooks';
import React from 'react';
import { myState } from './store';

export default () => {
  const [state, setState] = useLocalState(myState);

  const handleChange = () => setState(Math.random());

  return (
    <div>
      <div>{state}</div>
      <Button type="primary" onClick={handleChange}>
        变更
      </Button>
    </div>
  );
};
