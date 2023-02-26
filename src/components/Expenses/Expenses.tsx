import React from 'react';
import { StyledSection } from '../../ui/appStyles';
import { ExpenseList } from '../ExpenseList/ExpenseList';
import { Input } from '../Input/Input';
import { Title } from '../Title/Title';

export const Expenses = () => {
  return (
    <StyledSection>
      <Title></Title>
      <Input></Input>
      <ExpenseList></ExpenseList>
    </StyledSection>
  );
};
