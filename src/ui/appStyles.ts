import styled from 'styled-components';

const StyledApp = styled.div`
  display: grid;
  place-items: center;
  gap: 30px;
  max-width: 85%;
  min-height: 100vh;
  margin: 0 20px;
  font-family: 'Inter', 'san-serif';
`;

const StyledSection = styled.div`
  display: grid;
  place-items: center;
  gap: 30px;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 30px;
`;
export { StyledApp, StyledSection, Header };
