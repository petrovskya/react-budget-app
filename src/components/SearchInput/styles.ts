import styled from 'styled-components';

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  background: #fff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  font-family: inherit;
  font-size: 16px;
  color: rgba(153, 153, 153, 1);
  &:focus {
    outline-color: rgba(0, 0, 0, 0.3);
    color: rgba(0, 0, 0, 1);
  }
`;
