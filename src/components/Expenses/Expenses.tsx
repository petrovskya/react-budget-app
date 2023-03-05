import React, { useEffect, useState } from 'react';
import { StyledSection } from 'ui';
import { ExpenseList, Title, Input } from 'components';
import { StyledInput } from 'components/Input/styles';
import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import { useInput } from 'hooks/useInput';
import { StyledText } from './styles';
import { useDebounce } from 'hooks/useDebounce';
import { SearchInput } from 'components/SearchInput/SearchInput';
import { Expense } from 'context/ExpensesContext/types';

export const Expenses = () => {
  const { expenses } = useExpensesContext();
  const searchValue = useInput();
  const debouncedValue = useDebounce(searchValue.value, 300);
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);
  useEffect(() => {
    debouncedValue
      ? setFilteredExpenses(
          expenses.filter(
            (expense) =>
              expense.name.toLowerCase() === debouncedValue.toLowerCase()
          )
        )
      : setFilteredExpenses(expenses);
  }, [debouncedValue, expenses]);

  return (
    <StyledSection>
      <Title title='Expenses' />
      <SearchInput placeholder='search...' {...searchValue} />
      {filteredExpenses.length ? (
        <ExpenseList filtered={filteredExpenses} />
      ) : (
        <StyledText>Oooops 🙈</StyledText>
      )}
    </StyledSection>
  );
};
