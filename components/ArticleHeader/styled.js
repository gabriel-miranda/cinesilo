import styled from 'styled-components';

const ABSOLUTE_SIZE = `
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const Header = styled.header`
  position: relative;
  overflow: hidden;
`;

export const Background = styled.div`
  ${ABSOLUTE_SIZE}
  background-size: cover;
  background-position: center center;
  background-image: url(${({ bg }) => bg});
  background-color: ${({ theme }) => theme.article.header.background};
  z-index: ${({ theme }) => theme.article.header.zindex};
  &:after {
    ${ABSOLUTE_SIZE}
    content: '';
    background-color: ${({ theme }) => theme.article.header.background};
    z-index: ${({ theme }) => theme.article.header.overlay.zindex};
  }
`;

export const Content = styled.div`
  padding: 115px 0 20px;
  position: relative;
  z-index: 3;
  ${({ theme }) => theme.media.tablet`
    padding: 150px 0 30px;
  `}
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 30px;
  margin: 0 0 1em;
  ${({ theme }) => theme.media.tablet`
    font-size: 36px;
  `}
`;

export const Description = styled.p`
  font-size: 13px;
  line-height: 1.6em;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  ${({ theme }) => theme.media.tablet`
    font-size: 15px;
    max-width: 620px;
  `}
`;
