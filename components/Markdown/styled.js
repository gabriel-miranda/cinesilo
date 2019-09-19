import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

export const VideoWrapper = styled.div`
  position: relative;
  display: block;
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
  padding: 0 20px;
  display: inline-block;
  ${({ theme }) => theme.media.tablet`
    font-size: 17px;
    line-height: 31px;
    padding: 0 70px;
  `}
`;

export const Heading2 = styled.h2`
  font-size: 25px;
  border-bottom: 1px solid;
  padding: 0.75em 20px;
`;

export const Image = styled.img`
  ${({ theme }) => theme.media.tablet`
    border-radius: 5px;
  `}
`;

export const MarkdownWrapper = styled(Markdown)`
  padding: 2em 0 4em;
  > * {
    margin: 1em 0;
  }
`;
