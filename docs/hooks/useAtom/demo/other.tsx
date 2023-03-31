/**
 * title: 跨组件响应
 * description: 引入的 `myState` 与其他组件是同一个原子化store，所以在其他组件中对其进行修改，也会触发当前组件的响应
 */
import { useAtom } from 'l-hooks';
import React from 'react';
import { myState } from './state';

export default () => {
  const [state] = useAtom(myState);

  return (
    <div>
      <div>{state}</div>
    </div>
  );
};
