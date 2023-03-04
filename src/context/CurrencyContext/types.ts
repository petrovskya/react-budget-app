import { CurrencyOption } from 'components/CustomSelect/CustomSelect';
import { ReactNode } from 'react';

export interface CurrencyContextValue {
  currencyOptions: CurrencyOption[];
  currency: CurrencyOption;
  setCurrency: (event: CurrencyOption) => void;
}
export interface CurrencyContextProviderProps {
  children: ReactNode;
}
