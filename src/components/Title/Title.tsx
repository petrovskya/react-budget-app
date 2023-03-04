import React from 'react';
import { StyledTitle } from 'components';

export interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return <StyledTitle>{title}</StyledTitle>;
};
