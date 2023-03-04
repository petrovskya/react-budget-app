import { createContext, useContext, useState } from 'react';
import { BudgetContextProviderProps, BudgetContextValue } from './types';

export const BudgetContext = createContext<BudgetContextValue>(
  {} as BudgetContextValue
);

export const useBudgetContextValue = () => {
  const [budgetContext, setBudgetContext] = useState<BudgetContextValue>(() => {
    return {
      budget: 3000,
      setBudget: (newBudget) => {
        setBudgetContext((ctx) => ({
          ...ctx,
          budget: newBudget,
        }));
      },
    };
  });
  return budgetContext;
};
export const useBudgetContext = () =>
  useContext<BudgetContextValue>(BudgetContext);
export const BudgetContextProvider = ({
  children,
}: BudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetContextValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
