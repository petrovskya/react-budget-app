import { StyledSection, StyledHeader } from 'ui';
import {
  BudgetCard,
  Title,
  RemainingCard,
  SpentCard,
  CustomSelect,
} from 'components';
import { StyledBudget } from './styles';

export const Budget = () => {
  return (
    <StyledSection>
      <StyledHeader>
        <Title title='Your budget' />
        <CustomSelect />
      </StyledHeader>
      <StyledBudget>
        <BudgetCard />
        <RemainingCard />
        <SpentCard />
      </StyledBudget>
    </StyledSection>
  );
};
