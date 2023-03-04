import React from 'react';
import { StyledSection, StyledHeader } from 'ui';
import {
  BudgetCard,
  Title,
  RemainingCard,
  SpentCard,
  CustomSelect,
} from 'components';
import { useCurrencyContext } from 'context/CurrencyContext/CurrencyContext';

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
