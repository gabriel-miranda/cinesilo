import styled from 'styled-components';

const align = `
  display: flex;
  align-items: center;
`;

export const SubHeader = styled.div`
  height: ${({ theme }) => theme.subheader.height};
  background: ${({ theme }) => theme.subheader.background};
  color: ${({ theme }) => theme.subheader.font.color};
  ${align}
`;

export const VideoIcon = styled.span`
  background: ${({ theme }) => theme.subheader.icon.background};
  display: flex;
  padding: 2px 4px;
  border-radius: 5px;
  margin: 0 10px 0 2px;
  svg path {
    fill: ${({ theme }) => theme.subheader.icon.fill};
  }
`;

export const SubheaderText = styled.h2`
  line-height: 1;
  font-family: ${({ theme }) => theme.subheader.font.family};
  font-weight: ${({ theme }) => theme.subheader.font.weight};
  font-size: ${({ theme }) => theme.subheader.font.size};
  margin: ${({ theme }) => theme.subheader.font.margin};
  ${({ theme }) => theme.truncate}
`;

export const Header = styled.header`
  position: ${({ theme }) => theme.header.position};
  top: ${({ theme }) => theme.header.top};
  height: ${({ theme }) => theme.header.height};
  background: ${({ theme }) => theme.header.background};
  color: ${({ theme }) => theme.header.font.color};
  ${align}
`;

export const HeaderContent = styled.div`
  justify-content: ${({ justify }) =>
    justify ? 'space-between' : 'flex-start'};
  ${align}
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  z-index: ${({ theme }) => theme.header.zindex};
`;

export const Title = styled.span`
  display: inline-block;
  margin: ${({ theme }) => theme.header.title.margin};
  font-family: ${({ theme }) => theme.header.title.font.family};
  font-size: ${({ theme }) => theme.header.title.font.size};
  margin: ${({ theme }) => theme.header.title.margin};
  text-transform: lowercase;
  a {
    text-decoration: none;
    color: inherit;
  }
`;
