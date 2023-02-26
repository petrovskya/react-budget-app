import React from 'react';
import { StyledSection } from '../../ui/appStyles';
import { Form } from '../Form/Form';
import { Title } from '../Title/Title';

export const AddExpense = () => {
  return (
    <StyledSection>
      <Title></Title>
      <Form />
    </StyledSection>
  );
};
