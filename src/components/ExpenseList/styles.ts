import styled from 'styled-components';

export const StyledExpenseList = styled.ul<{ $isContainerFull: boolean }>`
  display: grid;
  align-content: flex-start;
  width: 100%;
  overflow-y: scroll;
  font-size: 16;
  color: rgba(0, 0, 0, 1);
  height: ${({ $isContainerFull }) => ($isContainerFull ? '200px' : 'auto')};
  overflow-y: ${({ $isContainerFull }) =>
    $isContainerFull ? 'scroll' : 'unset'};
`;
