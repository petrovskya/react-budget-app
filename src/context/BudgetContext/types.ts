import { ReactNode } from 'react';

export interface BudgetContextValue {
  budget: number;
  setBudget: (budget: number) => void;
}
export interface BudgetContextProviderProps {
  children: ReactNode;
}
