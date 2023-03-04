import { CurrencyContextProvider } from 'context/CurrencyContext/CurrencyContext';
import { ExpensesContextProvider } from 'context/ExpensesContext/ExpensesContext';
import { FC, ReactNode } from 'react';

const providers = [CurrencyContextProvider, ExpensesContextProvider];
export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      {providers.reduceRight((total, Provider) => {
        return <Provider>{total}</Provider>;
      }, children)}
    </>
  );
};
