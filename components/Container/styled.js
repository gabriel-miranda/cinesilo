import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: ${({ theme }) => theme.container.width};
  padding: ${({ theme }) => theme.container.padding};
`;

export default StyledContainer;
