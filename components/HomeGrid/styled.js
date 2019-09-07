import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0;
  background-color: #000;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent),
    url('/static/wave.svg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 2000px;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 40px;
  height: calc(4 * 80vw);
  ${({ theme }) => theme.media.mobile`
    height: 600px;
    grid-template-rows: repeat(3, 1fr);
  `}
  ${({ theme }) => theme.media.tablet`
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  `};
`;
