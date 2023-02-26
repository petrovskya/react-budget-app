import React from 'react';
import { Badge } from '../Badge/Badge';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
export const ExpenseItem = () => {
  return (
    <div>
      <Badge></Badge>
      <CloseIcon />
    </div>
  );
};
