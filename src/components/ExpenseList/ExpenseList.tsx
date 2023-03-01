import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import { ExpenseItem } from '../ExpenseItem/ExpenseItem';

export const ExpenseList = () => {
  const { expenses, deleteExpense } = useExpensesContext();
  return (
    <div>
      <ul>
        {expenses.map(({ id, name, cost }) => {
          return (
            <ExpenseItem
              key={id}
              value={{ id, name, cost }}
              onclick={() => deleteExpense(id)}
            />
          );
        })}
      </ul>
    </div>
  );
};
