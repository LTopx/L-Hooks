import { useNow } from 'l-hooks';
import React from 'react';

export default () => {
  const time = useNow();

  return <>{String(time)}</>;
};
