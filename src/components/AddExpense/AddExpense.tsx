import React from 'react';
import { StyledSection } from 'ui';
import { Title, Form, Input, Button } from 'components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import { InputTypes } from 'components/Form/Form';
import { v4 } from 'uuid';

export const AddExpense = () => {
  const { register, handleSubmit, reset, control } = useForm<InputTypes>();
  const { addNewExpense } = useExpensesContext();
  const onSubmit: SubmitHandler<InputTypes> = (expense: InputTypes) => {
    const newExpense = { ...expense, id: v4() };
    addNewExpense(newExpense);
    reset();
  };
  return (
    <StyledSection>
      <Title />
      <Form onSubmit={onSubmit}>
        <Input name='name' />
        <Input name='cost' />
        <Button type='submit' />
      </Form>
    </StyledSection>
  );
};
