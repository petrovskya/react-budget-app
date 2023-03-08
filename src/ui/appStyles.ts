import styled from 'styled-components';

const StyledApp = styled.div`
  display: grid;
  margin: 0 auto;
  gap: 30px;
  padding: 30px 20px;
  max-width: 768px;
  min-height: 100vh;
`;
const StyledSection = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  gap: 30px;
`;
const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export { StyledHeader, StyledApp, StyledSection };
