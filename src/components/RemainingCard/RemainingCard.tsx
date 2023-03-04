import React from 'react';
import { StyledRemainingCard } from 'components';
import { useBudgetContext } from 'context/BudgetContext/BudgetContext';
import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import { useCurrencyContext } from 'context/CurrencyContext/CurrencyContext';

export const RemainingCard = () => {
  const { budget } = useBudgetContext();
  const { spending } = useExpensesContext();
  const { currency } = useCurrencyContext();
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
