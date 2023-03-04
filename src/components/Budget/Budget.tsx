import React from 'react';
import { StyledSection, StyledHeader } from 'ui';
import {
  BudgetCard,
  Title,
  RemainingCard,
  SpentCard,
  CustomSelect,
} from 'components';

export const Budget = () => {
  return (
    <StyledSection>
      <StyledHeader>
        <Title title='Budget' />
        <CustomSelect />
      </StyledHeader>
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </StyledSection>
  );
};
