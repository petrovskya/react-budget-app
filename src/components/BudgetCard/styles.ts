import styled from 'styled-components';

export const StyledBudgetCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 20px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(124, 198, 254, 1);
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
`;
export const StyledEditInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  font-family: inherit;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
