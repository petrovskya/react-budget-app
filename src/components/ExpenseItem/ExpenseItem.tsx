import React, { MouseEventHandler } from 'react';
import { Badge } from '../Badge/Badge';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import { Expense } from 'context/ExpensesContext/types';
import { Currency } from 'config/Currency';
import { ExpenseItemBadge, StyledExpenseItem } from './styles';

export interface ExpenseItemProps {
  value: Expense;
  onclick: MouseEventHandler<SVGSVGElement> | undefined;
}
export const ExpenseItem = ({
  value: { id, name, cost },
  onclick,
}: ExpenseItemProps) => {
  return (
    <StyledExpenseItem key={id}>
      <span>{name}</span>
      <ExpenseItemBadge>
        <Badge label={Currency.USD} value={cost} />
        <CloseIcon onClick={onclick} />
      </ExpenseItemBadge>
    </StyledExpenseItem>
  );
};
