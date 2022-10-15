import { useState } from 'react';

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal);

  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, handler];
};

export default useInput;
