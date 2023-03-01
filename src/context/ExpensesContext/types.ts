import { ReactNode } from 'react';

export interface ExpensesContextValue {
  expenses: Expense[];
  addNewExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
}
export interface ExpensesContextProviderProps {
  children: ReactNode;
}
export interface Expense {
  id: string;
  name: string;
  cost: number;
}
export interface ExpenseData {
  name: string;
  cost: number;
}
