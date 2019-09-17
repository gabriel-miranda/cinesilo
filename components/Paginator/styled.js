import styled from 'styled-components';

export const Item = styled.li`
  display: inline-block;
`;

export const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  line-height: 35px;
  background: #fff;
  border-radius: 5px;
  text-align: center;
  margin: 8px;
  box-shadow: rgba(0, 0, 0, 0.09) 0 4px 9px;
  font-size: 14px;
  color: #000;
  text-decoration: none;
  ${({ selected }) =>
    selected &&
    `
    background: #673ab7;
    color: #fff;
  `}
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 0 2em;
`;
