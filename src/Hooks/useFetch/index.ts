import { useState } from 'react';

const useFetch = () => {
  const [loading] = useState(false);

  return loading;
};

export default useFetch;
