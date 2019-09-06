import styled from 'styled-components';

export const Drawer = styled.section`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.drawer.background};
  position: ${({ theme }) => theme.drawer.position};
  top: ${({ theme }) => theme.drawer.top};
  left: ${({ open }) => (open ? 0 : '100%')};
  width: ${({ theme }) => theme.drawer.width};
  min-height: ${({ theme }) => theme.drawer.minheight};
  padding: ${({ theme }) => theme.drawer.padding};
  z-index: ${({ theme }) => theme.drawer.zindex};
`;

export const LinkItem = styled.a`
  color: ${({ theme }) => theme.drawer.item.color};
  font-family: ${({ theme }) => theme.drawer.item.fontfamily};
  padding: ${({ theme }) => theme.drawer.item.padding};
  background: ${({ theme, active }) =>
    active ? theme.drawer.item.background : 'none'};
  display: ${({ theme }) => theme.drawer.item.display};
  width: ${({ theme }) => theme.drawer.item.width};
  margin: ${({ theme }) => theme.drawer.item.margin};
  border-radius: ${({ theme }) => theme.drawer.item.borderradius};
  text-decoration: none;
  cursor: pointer;
`;
