import styled from 'styled-components';

const StyledApp = styled.div`
  display: grid;
  place-items: center;
  margin: auto;
  gap: 30px;
  max-width: 85%;
  min-height: 100vh;
  font-family: 'Inter', 'san-serif';
`;
const StyledSection = styled.div`
  display: grid;
  place-items: center;
  gap: 30px;
  width: 100%;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 30px;
`;
const StyledEditButton = styled.button`
  padding: 10px 30px;
  border: none;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
`;
export { StyledHeader, StyledApp, StyledSection, StyledEditButton };
