import { Currency } from 'config/Currency';
import React from 'react';

export interface BadgeProps {
  label: Currency;
  value: number;
}
export const Badge = ({ label, value }: BadgeProps) => {
  return (
    <div>
      {label}
      {value}
    </div>
  );
};
