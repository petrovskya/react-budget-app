import { useExpensesContext } from 'context/ExpensesContext/ExpensesContext';
import React, { useRef } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import {
  Controller,
  RegisterOptions,
  SubmitHandler,
  useForm,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { v4 as uuidv4, v4 } from 'uuid';
import { StyledForm } from './styles';
import { StyledInput } from 'components/Input/styles';

export interface InputTypes {
  name: string;
  cost: number;
}

export const Form = ({ children, onSubmit }: any) => {
  const { handleSubmit, register, reset } = useForm();

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                reset,
                key: child.props.name,
              },
            })
          : child;
      })}
    </StyledForm>
    /* <StyledForm onSubmit={handleSubmit(onSubmit)}> */
    /* <Controller
      render={({ field: { value: onChange } }) => {
        return (
          <Input
            // value={value}
            // onChange={onChange}
            placeholder='enter name...'
            type='text'
          />
        );
      }}
      name='name'
      control={control}
      rules={{ required: true }}
    />
    <Controller
      render={({ field: { value: onChange } }) => (
        <Input
          // value={value}
          // onChange={onChange}
          placeholder='enter cost...'
          type='number'
        />
      )}
      name='cost'
      control={control}
      rules={{ required: true }}
    /> */
    /* <Input name='name' placeholder='enter name...' type='text' />
        <Input name='cost' placeholder='enter cost...' type='number' /> */
    // <Button type='submit' />
    /* </StyledForm> */
  );
};
