import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as v4 } from 'uuid';
import { StyledForm } from './styles';
export interface FormValues {
  name: string;
  cost: number;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const { addNewExpense } = useExpensesContext();
  const onSubmit: SubmitHandler<FormValues> = (expense: FormValues) => {
    const newExpense = { ...expense, id: v4() };
    addNewExpense(newExpense);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        name='name'
        type='text'
        placeholder='enter name...'
        register={register}
        required={true}
        maxLength={15}
      />
      {errors.name && 'This field is required. Max.length - 15.'}
      <Input
        name='cost'
        type='number'
        placeholder='enter cost...'
        register={register}
        required={true}
        maxLength={5}
      />
      {errors.cost && 'Enter cost!!!. Only numbers. Max.length - 5.'}
      <Button type='submit' />
    </StyledForm>
  );
};
