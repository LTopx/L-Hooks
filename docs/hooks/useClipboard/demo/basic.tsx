/**
 * title: 基础用法
 * description: 可以复制string、number、object
 */

import { Button } from 'antd';
import { useClipboard } from 'l-hooks';
import * as React from 'react';

export default () => {
  const { isCopied, copy } = useClipboard();

  const handleCopy = () => {
    if (isCopied) return;
    copy('内容');
  };

  return (
    <>
      {isCopied ? '已复制' : '未复制'}
      <Button type="primary" onClick={handleCopy}>
        点击复制
      </Button>
    </>
  );
};
