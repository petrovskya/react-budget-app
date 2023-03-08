import { StyledEditButton, StyledBudgetCard, StyledEditInput } from './styles';
import { useToggle, useInput } from 'hooks';
import { useBudgetContext, useCurrencyContext } from 'context';

export const BudgetCard = () => {
  const [isEditMode, toggleEditMode] = useToggle(false);
  const { budget, setBudget } = useBudgetContext();
  const { currency } = useCurrencyContext();
  const inputValue = useInput();
  const handleSave = () => {
    setBudget(Number(inputValue.value));
    toggleEditMode();
  };
  const handleEdit = () => toggleEditMode();
  return (
    <StyledBudgetCard>
      {isEditMode ? (
        <>
          <StyledEditInput
            type='number'
            placeholder='Enter budget...'
            {...inputValue}
          />
          <StyledEditButton type='button' onClick={handleSave}>
            Save
          </StyledEditButton>
        </>
      ) : (
        <>
          Budget: {currency.value}
          {budget}
          <StyledEditButton type='button' onClick={handleEdit}>
            Edit
          </StyledEditButton>
        </>
      )}
    </StyledBudgetCard>
  );
};
