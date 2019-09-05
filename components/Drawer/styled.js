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
`;

export const Form = styled.form`
  position: ${({ theme }) => theme.drawer.form.position};
  padding: ${({ theme }) => theme.drawer.form.padding};
  border-top: ${({ theme }) => theme.drawer.form.bordertop};
`;

export const Input = styled.input`
  width: ${({ theme }) => theme.search.width};
  border: ${({ theme }) => theme.search.border};
  border-radius: ${({ theme }) => theme.search.borderradius};
  line-height: ${({ theme }) => theme.search.lineheight};
  padding: ${({ theme }) => theme.search.padding};
`;

export const Icon = styled.button`
  background: ${({ theme }) => theme.search.button.background};
  position: ${({ theme }) => theme.search.button.position};
  display: ${({ theme }) => theme.search.button.display};
  margin: ${({ theme }) => theme.search.button.margin};
  padding: ${({ theme }) => theme.search.button.padding};
  height: ${({ theme }) => theme.search.button.height};
  top: ${({ theme }) => theme.search.button.top};
  bottom: ${({ theme }) => theme.search.button.bottom};
  border: ${({ theme }) => theme.search.button.border};
  right: ${({ theme }) => theme.search.button.right};
  svg path {
    fill: ${({ theme }) => theme.search.button.fill};
  }
`;

export const LinkItem = styled.a`
  color: ${({ theme }) => theme.drawer.item.color};
  font-family: ${({ theme }) => theme.drawer.item.fontfamily};
  padding: ${({ theme }) => theme.drawer.item.padding};
  background: ${({ theme }) => theme.drawer.item.background};
  display: ${({ theme }) => theme.drawer.item.display};
  width: ${({ theme }) => theme.drawer.item.width};
  margin: ${({ theme }) => theme.drawer.item.margin};
  border-radius: ${({ theme }) => theme.drawer.item.borderradius};
  text-decoration: none;
`;
