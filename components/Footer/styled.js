import styled from 'styled-components';
import Container from 'components/Container/styled';

export const Column = styled.div`
  width: 100%;
  ${({ theme }) => theme.media.tablet`
    width: auto;
    margin: 0 20px;
  `}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ theme }) => theme.media.tablet`
    flex-direction: row;
  `}
  ${Column}:first-of-type {
    ${({ theme }) => theme.media.tablet`
      width: 250px;
      margin-right: 40px;
    `}
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #000;
  color: rgba(255, 255, 255, 0.7);
  padding: 50px 0 0;
  min-height: 355px;
`;

export const InnerFooter = styled.div`
  background: #673ab7;
  display: flex;
  margin-top: 20px;
`;

export const InnerText = styled(Container)`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: lighter;
  line-height: 1;
  padding: 10px 20px;
  line-height: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.7;
`;

export const Title = styled.h3`
  font-size: 30px;
  font-family: 'cinesilo';
  color: #fff;
  text-transform: lowercase;
  margin: 0 0 7px 20px;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  line-height: 20px;
  font-weight: 300;
`;

export const SubTitle = styled.h4`
  text-transform: uppercase;
  font-family: 'cinesilo';
  font-size: 15px;
  padding: 0 30px 10px 0;
  color: rgba(255, 255, 255, 0.7);
  line-height: 40px;
  border-bottom: 1px solid;
  margin-top: 0;
`;

export const Category = styled.h5`
  text-transform: uppercase;
  font-family: Helvetica;
  font-weight: 300;
  font-size: 12px;
`;

export const Icon = styled.a`
  text-decoration: none;
  background: #673ab7;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin: 0 20px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
