import { useEffect, useState } from 'react';
import { StyledSection } from 'ui';
import { ExpenseList, Title } from 'components';
import { useExpensesContext } from 'context';
import { useInput, useDebounce } from 'hooks';
import { NoFoundMessage } from './styles';
import { SearchInput } from 'components';
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
