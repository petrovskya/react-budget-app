import { createContext, useContext, useState } from 'react';
import { BudgetContextProviderProps, BudgetContextValue } from './types';

export const BudgetContext = createContext<BudgetContextValue>(
  {} as BudgetContextValue
);

export const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<BudgetContextValue>(() => {
    return {
      budget: 0,
      setBudget: (budget) => {
        setBudgetContext((ctx) => ({
          ...ctx,
          budget,
        }));
      },
    };
  });
  return budgetContext;
};
export const useBudgetContext = () =>
  useContext<BudgetContextValue>(BudgetContext);
export const CurrencyContextProvider = ({
  children,
}: BudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
