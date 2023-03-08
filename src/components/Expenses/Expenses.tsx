import React, { useEffect, useState } from 'react';
import { StyledSection } from 'ui';
import { ExpenseList, Title } from 'components';
import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import { useInput } from 'hooks/useInput';
import { NoFoundMessage } from './styles';
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
          expenses.filter((expense) =>
            expense.name.toLowerCase().includes(debouncedValue.toLowerCase())
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
        <NoFoundMessage>Oooops 🙈</NoFoundMessage>
      )}
    </StyledSection>
  );
};
