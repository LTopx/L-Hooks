/**
 * title: 跨组件响应
 * description: 引入的 `myState` 与其他组件是同一个原子化store，所以在其他组件中对其进行修改，也会触发当前组件的响应
 */
import { useLocalState } from 'l-hooks';
import React from 'react';
import { myState } from './store';

export default () => {
  const [state] = useLocalState(myState);

  return <div>{state}</div>;
};
