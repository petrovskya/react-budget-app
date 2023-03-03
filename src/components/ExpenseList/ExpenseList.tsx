import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';
import { StyledExpenseList } from './styles';

export const ExpenseList = () => {
  const { expenses, deleteExpense } = useExpensesContext();
  return (
    <StyledExpenseList>
      {expenses.map(({ id, name, cost }) => {
        return (
          <ExpenseItem
            key={id}
            value={{ id, name, cost }}
            onclick={() => deleteExpense(id)}
          />
        );
      })}
    </StyledExpenseList>
  );
};
