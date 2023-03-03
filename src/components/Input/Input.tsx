import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import {
  Message,
  RefCallBack,
  useForm,
  UseFormRegister,
  ValidationRule,
} from 'react-hook-form';
import { StyledInput } from './styles';
import { InputTypes } from 'components/Form/Form';
export type FieldValues = Record<string, any>;

export interface InputProps {
  placeholder: string;
  name: 'name' | 'cost';
  // register: UseFormRegister<InputTypes>;
  type: HTMLInputTypeAttribute;
  // value: string;
  // onChange: (event: ChangeEvent<HTMLInputElement>) => any;
}

export const Input = ({ register, name, ...rest }: any) => {
  return <StyledInput {...rest} {...register(name)} />;
};
