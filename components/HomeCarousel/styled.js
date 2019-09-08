import styled from 'styled-components';
import StyledContainer from 'components/Container/styled';

const BOX_AMOUNT = 3;
const BOX_GAP = 40;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${BOX_GAP / 2}px;
  width: calc(80vw * ${BOX_AMOUNT});
  padding: 50px 20px 50px 0;
  ${({ theme }) => theme.media.mobile`
    width: calc(40vw * ${BOX_AMOUNT});
  `}

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    grid-gap: ${BOX_GAP}px;
    padding: 50px 0;
  `}
`;

export const ContainerWindow = styled(StyledContainer)`
  overflow: scroll;
  ${({ theme }) => theme.media.tablet`
    overflow: visible;
  `}
`;
