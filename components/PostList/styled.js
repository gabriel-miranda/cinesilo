import styled from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => theme.media.tablet`
    width: calc(100% - 336px);
  `}
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 0 40px;
  div:first-child figure + div {
    min-height: 250px;
  }
  ${({ theme }) => theme.media.mobile`
    div:first-child {
      margin-right: 30px;
    }
    flex-direction: row;
    div:first-child,
    div:first-child figure + div {
      min-width: 280px;
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const List = styled.ul``;

export const Title = styled.h2`
  font-size: 21px;
  margin-bottom: 0.5em;
  ${({ theme }) => theme.media.mobile`
    font-size: 30px;
    margin-top: 0;
  `}
`;
export const Description = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: #666;
  margin-bottom: 2em;
  ${({ theme }) => theme.media.mobile`
    font-size: 15px;
    letter-spacing: 0.2px;
  `}
`;
export const Button = styled.a`
  background: ${({ theme }) => theme.thumbnail.background.movies};
  box-shadow: 0 0 10px ${({ theme }) => theme.thumbnail.icon.movies};
  padding: 0.6em 1em;
  color: #fff;
  align-self: flex-start;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-family: cinesilo;
  cursor: pointer;
  font-size: 15px;
  svg {
    margin: 0 0 0 0.75em;
  }
`;
