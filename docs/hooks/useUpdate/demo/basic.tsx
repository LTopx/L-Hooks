import { Button } from 'antd';
import { useUpdate } from 'l-hooks';
import React from 'react';

export default () => {
  const update = useUpdate();

  console.log('render');

  return (
    <Button type="primary" onClick={update}>
      重新渲染
    </Button>
  );
};
