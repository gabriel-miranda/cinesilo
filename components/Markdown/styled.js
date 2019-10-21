import styled from 'styled-components';
import Markdown from 'markdown-to-jsx';

export const VideoWrapper = styled.div`
  position: relative;
  display: block;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  margin: 1em 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const P = styled.p`
  font-size: 16px;
  line-height: 1.9em;
  font-weight: 300;
  padding: 0 20px;
  display: inline-block;
  margin: 1em 0;
  ${({ theme }) => theme.media.tablet`
    font-size: 18px;
    padding: 0 70px;
  `}
`;

export const Heading2 = styled.h2`
  font-size: 32px;
  padding: 0 20px;
  margin: 0.75em 0 0.5em;
  font-weight: 800;
  color: #252525;
  ${({ theme }) => theme.media.tablet`
    font-size: 36px;
    padding: 0 70px;
  `}
`;

export const Image = styled.img`
  margin: 1em 0;
  ${({ theme }) => theme.media.tablet`
    border-radius: 10px;
  `}
`;

export const MarkdownWrapper = styled(Markdown)`
  padding: 1em 0 0;
  ${({ theme }) => theme.media.tablet`
    padding: 1em 20px 0;
  `}
`;
