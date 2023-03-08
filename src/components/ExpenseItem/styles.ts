import styled from 'styled-components';

export const StyledExpenseItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid rgba(204, 213, 255, 1);
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
`;
export const ExpenseItemBadge = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: 20px;
`;

export const StyledDeleteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:active {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1) inset;
    transform: scale(0.99);
  }
`;
