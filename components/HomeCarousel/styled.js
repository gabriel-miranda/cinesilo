import styled from 'styled-components';
import StyledContainer from 'components/Container/styled';

const BOX_AMOUNT = 3;
const BOX_GAP = 20;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${BOX_GAP}px;
  width: calc(80vw * ${BOX_AMOUNT});
  padding: 30px 20px 30px 0;
  ${({ theme }) => theme.media.mobile`
    width: calc(40vw * ${BOX_AMOUNT});
  `}

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    grid-gap: ${BOX_GAP}px;
    padding: 30px 0 30px;
  `}
`;

export const ContainerWindow = styled(StyledContainer)`
  overflow: scroll;
  ${({ theme }) => theme.media.tablet`
    overflow: visible;
  `}
`;
