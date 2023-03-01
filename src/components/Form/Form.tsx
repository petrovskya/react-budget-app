import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import React from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4, v4 } from 'uuid';

export interface FormValues {
  name: string;
  cost: number;
}

export const Form = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const { addNewExpense } = useExpensesContext();
  const onSubmit: SubmitHandler<FormValues> = (expense: FormValues) => {
    const newExpense = { ...expense, id: v4() };
    addNewExpense(newExpense);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='name' {...register('name')} />
      <input placeholder='cost' {...register('cost')} />
      <Button type='submit' />
    </form>
  );
};
