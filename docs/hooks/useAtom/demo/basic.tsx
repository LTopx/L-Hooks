/**
 * title: 基础用法
 * description: 创建原子化 `atom` 并通过 `useAtom` 使用，即可进行状态的原子化管理
 */
import { Button } from 'antd';
import { useAtom } from 'l-hooks';
import React from 'react';
import { myAtom } from './state';

export default () => {
  const [state, setState] = useAtom(myAtom);

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
