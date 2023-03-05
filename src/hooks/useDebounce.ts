import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay = 300): T => {
  const [debouncedValue, setDebounceValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDebounceValue(value);
    }, delay);
  }, [value, delay]);
  return debouncedValue;
};
