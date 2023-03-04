import React from 'react';
import { StyledSection } from 'ui';
import { ExpenseList, Title, Input } from 'components';
import { StyledInput } from 'components/Input/styles';

export const Expenses = () => {
  return (
    <StyledSection>
      <Title title='Expenses' />
      <StyledInput placeholder='search...'></StyledInput>
      <ExpenseList />
    </StyledSection>
  );
};
