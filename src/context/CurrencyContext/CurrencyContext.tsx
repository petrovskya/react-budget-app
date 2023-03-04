import { Currency } from 'config/Currency';
import { createContext, useContext, useState } from 'react';
import { CurrencyContextProviderProps, CurrencyContextValue } from './types';

export const CurrencyContext = createContext<CurrencyContextValue>(
  {} as CurrencyContextValue
);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<CurrencyContextValue>(
    () => {
      return {
        currencyOptions: [
          { label: 'USD', value: Currency.USD },
          { label: 'EUR', value: Currency.EUR },
          { label: 'GBR', value: Currency.GBR },
        ],
        currency: {
          label: 'USD',
          value: Currency.USD,
        },
        setCurrency: (currency) => {
          setCurrencyContext((ctx) => ({
            ...ctx,
            currency,
          }));
        },
      };
    }
  );
  return currencyContext;
};

export const useCurrencyContext = () =>
  useContext<CurrencyContextValue>(CurrencyContext);
export const CurrencyContextProvider = ({
  children,
}: CurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
