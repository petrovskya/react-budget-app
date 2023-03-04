import { Currency } from 'config/Currency';
import { useCurrencyContext } from 'context/CurrencyContext/CurrencyContext';
import React from 'react';
import Select, { SingleValue } from 'react-select';
import { selectStyles } from './styles';

export interface CurrencyOption {
  label: keyof typeof Currency;
  value: Currency;
}

export const CustomSelect = () => {
  const { setCurrency, currencyOptions, currency } = useCurrencyContext();
  const onChange = (value: SingleValue<CurrencyOption>) => {
    if (value) {
      setCurrency(value);
    }
  };
  return (
    <Select
      value={currency}
      onChange={onChange}
      options={currencyOptions}
      isMulti={false}
      isSearchable={false}
      styles={selectStyles}
    />
  );
};
