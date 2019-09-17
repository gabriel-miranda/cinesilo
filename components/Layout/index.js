import styled from 'styled-components';
import Container from 'components/Container/styled';

export const Layout = styled(Container)`
  display: flex;
`;

export const RightContent = styled.div`
  flex: 1;
  ${({ theme }) => theme.media.tablet`
    padding: 0 20px 0 0;
  `}
`;

export const Aside = styled.aside`
  display: none;
  ${({ theme }) => theme.media.tablet`
    display: block;
    width: 336px;
  `}
`;
