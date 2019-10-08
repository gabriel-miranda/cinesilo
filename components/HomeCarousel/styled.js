import styled from 'styled-components';
import StyledContainer from 'components/Container/styled';

const BOX_AMOUNT = 3;
const BOX_GAP = 40;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${BOX_GAP / 2}px;
  width: calc(80vw * ${BOX_AMOUNT});
  border-bottom: 1px solid #ebebeb;
  padding: 0 0 50px;
  ${({ theme }) => theme.media.mobile`
    width: calc(40vw * ${BOX_AMOUNT});
  `}

  ${({ theme }) => theme.media.tablet`
    width: 100%;
    grid-gap: ${BOX_GAP}px;
  `}
`;

export const ContainerWindow = styled(StyledContainer)`
  overflow: scroll;
  ${({ theme }) => theme.media.tablet`
    overflow: visible;
    padding: 0 20px 0;
  `}
`;

export const Title = styled.h4`
  margin: 1.5em 0 2em;
  font-size: 24px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5em;
    width: 1.5em;
    height: 5px;
    border-radius: 10px;
    background: #673ab7;
  }
`;
