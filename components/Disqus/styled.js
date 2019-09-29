import styled from 'styled-components';

export default styled.div`
  padding: 0 20px;
  margin: 0 0 200px;
  ${({ theme }) => theme.media.tablet`
    padding: 0 70px;
  `}
`;
