import React from 'react';
import { StyledSpentCard } from 'components';
import { useBudgetContext } from 'context/BudgetContext/BudgetContext';
import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import { useCurrencyContext } from 'context/CurrencyContext/CurrencyContext';

export const SpentCard = () => {
  const { spending } = useExpensesContext();
  const { currency } = useCurrencyContext();
  return (
    <StyledSpentCard>
      Spent so far: {currency.value}
      {spending}
    </StyledSpentCard>
  );
};
