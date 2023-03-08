import { Currency } from 'config/Currency';
import { StyledBadge } from './styles';

export interface BadgeProps {
  label: Currency;
  value: number;
}
export const Badge = ({ label, value }: BadgeProps) => {
  return (
    <StyledBadge>
      {label}
      {value}
    </StyledBadge>
  );
};
