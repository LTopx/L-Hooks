import * as React from 'react';

/** 调用方法可强制render当前页面 */
const useUpdate = () => {
  const [, setState] = React.useState({});
  return React.useCallback(() => setState({}), []);
};

export { useUpdate };
