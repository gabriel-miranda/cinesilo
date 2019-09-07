import styled from 'styled-components';

export const Image = styled.img`
  position: relative;
  max-width: none;
  min-height: 100%;
  min-width: calc(100% + 30px);
  transition: all 0.4s ease;
  left: -30px;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  &:hover ${Image} {
    left: 0;
  }
`;

export const ArticleLarge = styled(Article)`
  ${({ theme }) => theme.media.mobile`
    grid-area: 1 / 1 / 3 / 5;
  `};
  ${({ theme }) => theme.media.tablet`
    grid-area: 1 / 1 / 3 / 3;
  `}
`;

export const ArticleMedium = styled(Article)`
  ${({ theme }) => theme.media.tablet`
    grid-area: 1 / 3 / 2 / 5;
  `}
`;

export const Figure = styled.figure`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const Content = styled.div`
  position: relative;
  z-index: 300;
  padding: 30px;
  background: ${({ theme, category }) =>
    `linear-gradient(to top, ${
      theme.thumbnail.icon[category]
    }, rgba(0,0,0,0.3))`};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  cursor: pointer;
`;

export const Icon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: ${({ theme, category }) => theme.thumbnail.icon[category]};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  ${({ theme }) => theme.media.mobile`
    background: none;
    box-shadow: none;
  `}
  ${({ theme, category }) => theme.media.tablet`
    background: ${theme.thumbnail.icon[category]};
    box-shadow:  0 0 5px rgba(0, 0, 0, 0.3);
  `}
`;

export const Footer = styled.footer`
  color: white;
`;

export const Title = styled.h2`
  font-size: 24px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  ${({ theme }) => theme.media.mobile`
    font-size: 18px;
    ${theme.truncate(2)}
  `}
  ${({ theme }) => theme.media.tablet`
    ${theme.truncate(3)}
  `}
`;

export const TitleLarge = styled(Title)`
  ${({ theme }) => theme.media.mobile`
    font-size: 30px;
  `}
`;

export const TitleMedium = styled(Title)`
  ${({ theme }) => theme.media.tablet`
    font-size: 24px;
  `}
`;

export const description = styled.p`
  opacity: 0.8;
  font-weight: 300;
  font-size: 15px;
  line-height: 21px;
  display: none;
  margin-bottom: 0;
  ${({ theme }) => theme.media.mobile`
    display: flex;
  `}
`;