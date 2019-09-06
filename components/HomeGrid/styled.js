import styled from 'styled-components';

export const Section = styled.section`
  padding: 160px 0 80px;
  background-color: #000;
  background-image: url('/static/wave.svg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 2000px;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 40px;
  @media screen and (min-width: 960px) {
    height: 600px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const GridItem = styled.article`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: grey;
  background-image: linear-gradient(
    to top,
    rgba(103, 58, 183, 0.7),
    transparent
  );
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  @media screen and (min-width: 960px) {
    &:nth-child(1) {
      grid-area: 1 / 1 / 3 / 3;
    }
    &:nth-child(2) {
      grid-area: 1 / 3 / 2 / 5;
    }
  }
`;

export const Title = styled.h2`
  color: white;
  margin: 0;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
