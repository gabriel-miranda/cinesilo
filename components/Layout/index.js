import styled from 'styled-components';
import Container from 'components/Container/styled';

export const Layout = styled(Container)`
  display: flex;
  ${({ spacing }) => (spacing ? 'margin-top: 50px' : '')};
  ${({ small }) => (small ? 'padding: 0' : 'padding: 0 20px')};
`;

export const LeftContent = styled.div`
  flex: 1;
  ${({ theme }) => theme.media.tablet`
    padding: 0 20px 0 0;
    max-width: calc(100% - 336px);
  `}
`;

export const Aside = styled.aside`
  display: none;
  ${({ theme }) => theme.media.tablet`
    display: block;
    width: 336px;
  `}
`;
