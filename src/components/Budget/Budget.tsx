import React from 'react';
import { StyledSection, Header } from '../../ui/appStyles';
import { BudgetCard } from '../BudgetCard/BudgetCard';
import { RemainingCard } from '../RemainingCard/RemainingCard';
import { Select } from '../Select/Select';
import { SpentCard } from '../SpentCard/SpentCard';
import { Title } from '../Title/Title';

export const Budget = () => {
  return (
    <StyledSection>
      <Header>
        <Title></Title>
        <Select></Select>
      </Header>
      <BudgetCard></BudgetCard>
      <RemainingCard></RemainingCard>
      <SpentCard></SpentCard>
    </StyledSection>
  );
};
