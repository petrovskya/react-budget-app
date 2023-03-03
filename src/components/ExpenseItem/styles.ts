import styled from 'styled-components';

export const StyledExpenseItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  width: 100%;
  border-bottom: 2px solid rgba(204, 213, 255, 1);

  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
`;
export const ExpenseItemBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
