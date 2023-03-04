import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister, ValidationValue } from 'react-hook-form';
import { StyledInput } from './styles';
import { FormValues } from 'components/Form/Form';
export type FieldValues = Record<string, any>;

export interface InputProps {
  placeholder: string;
  name: 'name' | 'cost';
  register: UseFormRegister<FormValues>;
  type: HTMLInputTypeAttribute;
  required: boolean;
  maxLength: number;
}
export const Input = ({
  register,
  required,
  type,
  name,
  placeholder,
  maxLength,
}: InputProps) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type={type}
      {...register(name, {
        required: required,
        maxLength: maxLength,
      })}
    />
  );
};
