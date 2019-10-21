import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 0.5em;
  color: #252525;
  transition: all 0.3s ease;
  ${({ theme }) => theme.media.mobile`
    font-size: 28px;
    margin-top: 0;
  `};
`;

export const Item = styled.a`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px;
  padding: 0 0 15px;
  text-decoration: none;
  &:last-child {
    border-bottom: none;
  }
  ${({ theme }) => theme.media.mobile`
    flex-direction: row;
    align-items: center;
  `}
  &:hover ${Title} {
    color: #6839b7a6;
  }
  &:hover button {
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const List = styled.ul`
  ${({ theme }) => theme.media.tablet`
    padding: 0 20px 0 0;
  `}
`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 21px;
  color: #666;
  margin-bottom: 2em;
  font-weight: 300;
  ${({ theme }) => theme.media.mobile`
    letter-spacing: 0.2px;
  `}
`;

export const Figure = styled.figure`
  position: relative;
  display: inline-block;
  margin: 0;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  max-height: 180px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme, category }) =>
      `linear-gradient(to top, ${
        theme.thumbnail.icon[category]
      }, transparent)`};
  }
  ${({ theme }) => theme.media.mobile`
    max-height: none;
    display: flex;
    margin: 0 25px 0 0;
  `};
  ${({ theme }) => theme.media.tablet`
    width: 230px;
  `}
`;

export const Thumbnail = styled.img`
  min-width: 100%;
  min-height: 100%;
  max-height: none;
  height: auto;
`;

export const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.thumbnail.background.movies};
  box-shadow: 0 0 10px ${({ theme }) => theme.thumbnail.icon.movies};
  padding: 0.6em 1em;
  color: #fff;
  align-self: flex-start;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-family: cinesilo, Arial, Helvetica, sans-serif;
  cursor: pointer;
  font-size: 15px;
  transition: all 0.3s ease;
  svg {
    margin: 0 0 0 0.75em;
  }
`;
