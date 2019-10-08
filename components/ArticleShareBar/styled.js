import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-gap: 20px;
  padding: 0 20px 20px;
  grid-template-columns: repeat(2, 1fr);
  ${({ theme }) => theme.media.tablet`
    padding: 0 90px 20px;
  `}
`;
