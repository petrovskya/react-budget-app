import React from 'react';
import { StyledButton } from 'components';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  // isDisabled: boolean;
}
export const Button = ({ type }: ButtonProps) => {
  return <StyledButton type={type}>Done</StyledButton>;
};
