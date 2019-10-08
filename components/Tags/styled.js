import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  padding: 30px 20px;
  ${({ theme }) => theme.media.tablet`
    padding: 30px 90px;
  `}
`;

export const Item = styled.li`
  margin: 0 1em 0 0;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0.5em 1em;
  color: #aaa;
  border: 1px solid;
  border-radius: 50px;
  font-size: 14px;
  &:hover {
    color: #673ab7;
  }
  ${({ icon }) =>
    icon &&
    `
    padding: 0;
    color: #fff;
    background: #673ab7;
    width: 30px;
    height: 30px;
  `}
`;
