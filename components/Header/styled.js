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

export const SubheaderText = styled.h3`
  line-height: 1;
  font-family: ${({ theme }) => theme.subheader.font.family};
  font-weight: ${({ theme }) => theme.subheader.font.weight};
  font-size: ${({ theme }) => theme.subheader.font.size};
  margin: ${({ theme }) => theme.subheader.font.margin};
  ${({ theme }) => theme.truncate()}
  ${({ loading }) =>
    loading &&
    `
    background: #fff;
    border-radius: 3px;
    width: 150px;
    height: 1em;
    opacity: 0.8;
  `}
`;

export const Header = styled.header`
  position: ${({ theme }) => theme.header.position};
  top: ${({ theme }) => theme.header.top};
  height: ${({ theme }) => theme.header.height};
  background: ${({ theme }) => theme.header.background};
  z-index: ${({ theme }) => theme.header.zindex + 200};
  ${align}
`;

export const SlugHeader = styled(Header)`
  position: absolute;
  left: 0;
  right: 0;
  top: 35px;
  background: transparent;
  transition: background 0.3s ease;
  ${({ fixed }) =>
    fixed &&
    `
    position: fixed;
    background: #000;
    top: 0;
  `}
`;

export const HeaderContent = styled.div`
  color: ${({ theme }) => theme.header.font.color};
  text-decoration: none;
  justify-content: ${({ justify }) =>
    justify ? 'space-between' : 'flex-start'};
  ${align}
`;

export const TitleContainer = styled.a`
  display: flex;
  align-items: center;
  z-index: ${({ theme }) => theme.header.zindex};
  text-decoration: none;
`;

export const Title = styled.span`
  display: inline-block;
  margin: ${({ theme }) => theme.header.title.margin};
  font-family: ${({ theme }) => theme.header.title.font.family};
  font-size: ${({ theme }) => theme.header.title.font.size};
  margin: ${({ theme }) => theme.header.title.margin};
  color: ${({ theme }) => theme.header.font.color};
  text-transform: lowercase;
`;
