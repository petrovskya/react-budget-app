import { Expense } from 'context/ExpensesContext/types';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

export const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};
