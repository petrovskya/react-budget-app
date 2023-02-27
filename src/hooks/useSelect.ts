import { useState } from 'react';
import { SingleValue } from 'react-select';
import { CurrencyOption } from '../components/CustomSelect/CustomSelect';
import { options } from '../components/Budget/Budget';

export const useSelect = () => {
  const [value, setValue] = useState<CurrencyOption>(options[0]);

  const onChange = (e: SingleValue<CurrencyOption>) => {
    if (e) {
      setValue(e);
    }
  };
  return { value, onChange };
};
