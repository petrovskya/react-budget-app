import React from 'react';
import { StyledRemainingCard } from 'components';
import { useBudgetContext } from 'context/BudgetContext/BudgetContext';
import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import { useCurrencyContext } from 'context/CurrencyContext/CurrencyContext';
import { Expense } from 'context/ExpensesContext/types';

export const RemainingCard = () => {
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();
  const { currency } = useCurrencyContext();
  const spending = expenses.reduce(
    (prevValue: number, currentValue: Expense) =>
      prevValue + Number(currentValue.cost),
    0
  );
  const remaining = budget - spending;
  const isOverSpending = remaining < 0;
  return (
    <StyledRemainingCard $isOverSpending={isOverSpending}>
      {isOverSpending ? 'Overspending by ' : 'Remaining: '}
      {currency.value}
      {isOverSpending ? Math.abs(remaining) : remaining}
    </StyledRemainingCard>
  );
};
