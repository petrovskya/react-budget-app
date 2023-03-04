import React, { MouseEventHandler } from 'react';
import { Badge } from '../Badge/Badge';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { Expense } from 'context/ExpensesContext/types';
import { ExpenseItemBadge, StyledExpenseItem } from './styles';
import { useCurrencyContext } from 'context/CurrencyContext/CurrencyContext';

export interface ExpenseItemProps {
  value: Expense;
  onclick: MouseEventHandler<SVGSVGElement> | undefined;
}
export const ExpenseItem = ({
  value: { id, name, cost },
  onclick,
}: ExpenseItemProps) => {
  const { currency } = useCurrencyContext();
  return (
    <StyledExpenseItem key={id}>
      <span>{name}</span>
      <ExpenseItemBadge>
        <Badge label={currency.value} value={cost} />
        <CloseIcon onClick={onclick} />
      </ExpenseItemBadge>
    </StyledExpenseItem>
  );
};
