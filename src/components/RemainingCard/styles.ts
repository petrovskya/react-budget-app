import styled from 'styled-components';

export const StyledRemainingCard = styled.div<{ $isOverSpending: boolean }>`
  padding: 38px 20px;
  width: 100%;
  border-radius: 10px;
  background-color: ${({ $isOverSpending }) =>
    $isOverSpending ? '#FF0000' : 'rgba(204, 213, 255, 1)'};
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
`;
