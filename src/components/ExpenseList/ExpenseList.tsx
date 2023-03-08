import { useExpensesContext } from 'context';
import { Expense } from 'context/ExpensesContext/types';
import { ExpenseItem } from 'components';
import { StyledExpenseList } from './styles';

interface ExpenseListProps {
  filtered: Expense[];
}
export const ExpenseList = ({ filtered }: ExpenseListProps) => {
  const { deleteExpense } = useExpensesContext();
  const isContainerFull = filtered.length > 4;
  return (
    <StyledExpenseList $isContainerFull={isContainerFull}>
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
