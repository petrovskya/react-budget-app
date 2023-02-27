import React from 'react';
import { StyledSection, StyledHeader } from 'ui';
import {
  BudgetCard,
  Title,
  RemainingCard,
  CustomSelect,
  SpentCard,
} from 'components';
import { Currency } from 'config/Currency';
import { CurrencyOption } from 'components/CustomSelect/CustomSelect';
import { useSelect } from 'hooks/useSelect';

export const options: CurrencyOption[] = [
  { label: 'USD', value: Currency.USD },
  { label: 'EUR', value: Currency.EUR },
  { label: 'GBR', value: Currency.GBR },
];

export const Budget = () => {
  const currency = useSelect();
  console.log({ ...currency });
  return (
    <StyledSection>
      <StyledHeader>
        <Title />
        <CustomSelect options={options} {...currency} />
      </StyledHeader>
      <BudgetCard />
      <RemainingCard />
      <SpentCard />
    </StyledSection>
  );
};
