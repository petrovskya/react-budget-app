import React from 'react';
import { StyledSection } from 'ui';
import { ExpenseList, Title, Input } from 'components';

export const Expenses = () => {
  return (
    <StyledSection>
      <Title></Title>
      <Input></Input>
      <ExpenseList></ExpenseList>
    </StyledSection>
  );
};
