import React, { useState } from "react";

const useInput = (initVal) => {
  console.log(initVal);
  const [value, setValue] = useState(initVal);

  const handler = (e) => {
    setValue(e.target.value);
  };

  return [value, setValue, handler];
};

export default useInput;
