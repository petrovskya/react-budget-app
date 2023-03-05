import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import { Expense } from 'context/ExpensesContext/types';
import { useDebounce } from 'hooks/useDebounce';
import { useEffect, useState } from 'react';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import { StyledExpenseList } from './styles';

interface ExpenseListProps {
  filtered: Expense[];
}
export const ExpenseList = ({ filtered }: ExpenseListProps) => {
  const { deleteExpense } = useExpensesContext();

  return (
    <StyledExpenseList>
      {filtered.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onclick={() => deleteExpense(expense.id)}
          />
        );
      })}
    </StyledExpenseList>
  );
};
