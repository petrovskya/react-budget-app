import { ReactNode } from 'react';

export interface BudgetContextValue {
  budget: number;
  setBudget: (value: number) => void;
}
export interface BudgetContextProviderProps {
  children: ReactNode;
}
