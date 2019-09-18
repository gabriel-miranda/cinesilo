import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

export const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const P = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  ${({ theme }) => theme.media.tablet`
    font-size: 17px;
    line-height: 31px;
  `}
`;

export const Heading2 = styled.h2`
  font-size: 25px;
  border-bottom: 1px solid;
  padding: 0.75em 30px;
`;

export const Image = styled.img`
  img {
    position: relative;
    left: -30px;
    width: calc(100% + 60px);
    max-width: none;
    ${({ theme }) => theme.media.tablet`
      left: -20px;
      width: calc(100% + 40px);
    `}
  }
`;

export const MarkdownWrapper = styled(Markdown)`
  padding-bottom: 4em;
`;
