import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 15px 147px;
  background: rgba(35, 201, 255, 1);
  border-radius: 10px;
  border: none;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  transition-duration: 0.3s;
  cursor: pointer;
  &:active {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3) inset;
    transform: scale(0.99);
  }
`;
