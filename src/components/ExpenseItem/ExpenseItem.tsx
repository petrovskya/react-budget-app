import React, { MouseEventHandler } from 'react';
import { Badge } from '../Badge/Badge';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { Expense } from 'context/ExpensesContext/types';
import { ExpenseItemBadge, StyledExpenseItem } from './styles';
import { useCurrencyContext } from 'context/CurrencyContext/CurrencyContext';

export interface ExpenseItemProps {
  expense: Expense;
  onclick: MouseEventHandler<SVGSVGElement> | undefined;
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
        <CloseIcon onClick={onclick} />
      </ExpenseItemBadge>
    </StyledExpenseItem>
  );
};
