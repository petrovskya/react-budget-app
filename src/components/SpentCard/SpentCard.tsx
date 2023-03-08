import React from 'react';
import { StyledSpentCard } from './styles';
import { useExpensesContext, useCurrencyContext } from 'context';
import { Expense } from 'context/ExpensesContext/types';

export const SpentCard = () => {
  const { currency } = useCurrencyContext();
  const { expenses } = useExpensesContext();
  const spending = expenses.reduce(
    (prevValue: number, currentValue: Expense) =>
      prevValue + Number(currentValue.cost),
    0
  );
  return (
    <StyledSpentCard>
      Spent so far: {currency.value}
      {spending}
    </StyledSpentCard>
  );
};
