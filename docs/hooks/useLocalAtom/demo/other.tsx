/**
 * title: 跨组件响应
 * description: 引入的 `myAtom` 与其他组件是同一个原子化localAtom，所以在其他组件中对其进行修改，也会触发当前组件的响应
 */
import { useLocalAtom } from 'l-hooks';
import React from 'react';
import { myAtom } from './store';

export default () => {
  const [state] = useLocalAtom(myAtom);

  return <div>{state.age}</div>;
};
