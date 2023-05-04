import React from 'react';
import { AddExpense, Budget, Expenses } from 'components';
import { StyledApp } from './ui/appStyles';

export const App = () => {
  return (
    <StyledApp>
      <Budget />
      <Expenses />
      <AddExpense />
    </StyledApp>
  );
};
