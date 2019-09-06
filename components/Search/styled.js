import styled from 'styled-components';

export const Form = styled.form`
  position: ${({ theme }) => theme.drawer.form.position};
  padding: ${({ theme }) => theme.drawer.form.padding};
  border-top: ${({ theme }) => theme.drawer.form.bordertop};
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.search.button.background};
  position: ${({ theme }) => theme.search.button.position};
  display: ${({ theme, show }) =>
    show ? theme.search.button.display : 'none'};
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

export const Input = styled.input`
  width: ${({ theme }) => theme.search.width};
  border: ${({ theme }) => theme.search.border};
  border-radius: ${({ theme }) => theme.search.borderradius};
  line-height: ${({ theme }) => theme.search.lineheight};
  padding: ${({ theme }) => theme.search.padding};
  &:after,
  &:before {
    display: none;
  }
`;
