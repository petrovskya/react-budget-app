import React from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
}

export const Button = ({ type }: ButtonProps) => {
  return <StyledButton type={type}>Done</StyledButton>;
};
