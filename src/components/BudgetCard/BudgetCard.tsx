import React from 'react';
import { StyledEditButton } from 'ui';
import { StyledBudgetCard } from 'components';
import { useToggle } from 'hooks/useToggle';
import { StyledEditInput } from './styles';
import { useBudgetContext } from 'context/BudgetContext/BudgetContext';
import { useInput } from 'hooks/useInput';
import { useCurrencyContext } from 'context/CurrencyContext/CurrencyContext';

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
          <p>
            Budget: {currency.value}
            {budget}
          </p>
          <StyledEditButton type='button' onClick={handleEdit}>
            Edit
          </StyledEditButton>
        </>
      )}
    </StyledBudgetCard>
  );
};
