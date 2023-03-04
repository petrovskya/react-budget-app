import { createContext, useContext, useState } from 'react';
import { ExpensesContextProviderProps, ExpensesContextValue } from './types';

export const ExpensesContext = createContext<ExpensesContextValue>(
  {} as ExpensesContextValue
);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<ExpensesContextValue>(
    () => {
      return {
        expenses: [],
        spending: 0,
        addNewExpense: (expense) => {
          setExpensesContext((ctx) => ({
            ...ctx,
            expenses: [...ctx.expenses, expense],
            spending: ctx.spending + Number(expense.cost),
          }));
        },
        deleteExpense: (id) => {
          setExpensesContext((ctx) => ({
            ...ctx,
            expenses: ctx.expenses.filter((expense) => expense.id !== id),
          }));
        },
      };
    }
  );
  return expensesContext;
};
export const useExpensesContext = () =>
  useContext<ExpensesContextValue>(ExpensesContext);

export const ExpensesContextProvider = ({
  children,
}: ExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};
