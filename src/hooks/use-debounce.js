import { useState } from "react";

export function useDebounceTime(timeInMS, initialVal) {
  const [val, setVal] = useState(initialVal);
  let timeout;

  const setDebounced = (val) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      setVal(val);
    }, timeInMS);
  };

  return [val, setDebounced];
}
