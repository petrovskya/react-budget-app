import { Currency } from 'config/Currency';
import React from 'react';
import Select, { SingleValue } from 'react-select';
import { selectStyles } from './styles';

export interface CurrencyOption {
  label: keyof typeof Currency;
  value: Currency;
}
export interface SelectProps {
  options: CurrencyOption[];
  value: CurrencyOption;
  onChange: (event: SingleValue<CurrencyOption>) => void;
}

export const CustomSelect = ({ options, value, onChange }: SelectProps) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      isMulti={false}
      isSearchable={false}
      styles={selectStyles}
    />
  );
};
