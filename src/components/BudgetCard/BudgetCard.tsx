import React from 'react';
import { StyledEditButton } from 'ui';
import { StyledBudgetCard } from 'components';

export const BudgetCard = () => {
  return (
    <StyledBudgetCard>
      <div>Budget: </div>
      <StyledEditButton>Edit</StyledEditButton>
    </StyledBudgetCard>
  );
};
