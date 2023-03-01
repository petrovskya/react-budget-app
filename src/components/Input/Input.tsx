import React, { HTMLInputTypeAttribute } from 'react';
import {
  Message,
  useForm,
  UseFormRegister,
  ValidationRule,
} from 'react-hook-form';
import { StyledInput } from './styles';
import { FormValues } from 'components/Form/Form';
export type FieldValues = Record<string, any>;

// export interface InputHooks {
//   value: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }
// export interface InputProps {
//   placeholder: string;
//   register: UseFormRegister<FormValues>;
//   type: HTMLInputTypeAttribute;
// }

export const Input = () => {
  return <StyledInput />;
};
