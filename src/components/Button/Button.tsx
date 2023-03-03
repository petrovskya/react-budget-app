import React from 'react';
import { StyledButton } from 'components';
import { InputTypes } from 'components/Form/Form';
import type { UseFormReset } from 'react-hook-form';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  // isDisabled: boolean;
}

export const Button = ({ type }: ButtonProps) => {
  return <StyledButton type={type}>Done</StyledButton>;
};

// ({reset}:  {reset: UseFormReset<FormValues> })
// onClick={()=>reset()}
