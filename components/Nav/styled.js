import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  border: 0;
  background: none;
  display: flex;
  z-index: ${({ theme }) => theme.header.zindex};
  cursor: pointer;
`;

export const MobileNav = styled.div`
  ${({ theme }) => theme.media.tablet`
    display: none;
  `}
`;

export const DesktopNav = styled.nav`
  display: none;
  ${({ theme }) => theme.media.tablet`
    display: flex;
  `}
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 1em;
`;

export const LinkItem = styled.a`
  font-family: 'cinesilo', Arial, Helvetica, sans-serif;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 13px;
  margin: 0 18px;
  display: inline-block;
  border-radius: 250px;
  line-height: 1;
  cursor: pointer;
  background: ${({ theme, active }) =>
    active ? theme.drawer.item.background : 'none'};
`;
