import React, { MouseEventHandler } from 'react';
import { Badge } from 'components';
import { Expense } from 'context/ExpensesContext/types';
import {
  ExpenseItemBadge,
  StyledDeleteButton,
  StyledExpenseItem,
} from './styles';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { useCurrencyContext } from 'context';

export interface ExpenseItemProps {
  expense: Expense;
  onclick: MouseEventHandler<HTMLButtonElement> | undefined;
}
export const ExpenseItem = ({
  expense: { name, cost },
  onclick,
}: ExpenseItemProps) => {
  const { currency } = useCurrencyContext();
  return (
    <StyledExpenseItem>
      <span>{name}</span>
      <ExpenseItemBadge>
        <Badge label={currency.value} value={cost} />
        <StyledDeleteButton onClick={onclick}>
          <CloseIcon />
        </StyledDeleteButton>
      </ExpenseItemBadge>
    </StyledExpenseItem>
  );
};
