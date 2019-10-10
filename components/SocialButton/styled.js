import React from 'react';
import styled from 'styled-components';

function shadow(r, g, b) {
  return `
    box-shadow: 0 2px 10px rgba(${r}, ${g}, ${b}, 0.5);
    &:hover {
      box-shadow: 0 2px 10px rgba(${r}, ${g}, ${b}, 0.8);
    }
  `;
}

const BACKGROUNDS = {
  facebook: `
    background: linear-gradient(to right, #0063da, #0094d7);
    ${shadow(0, 99, 218)}
  `,
  twitter: `
    background: linear-gradient(to right, #0094d7, #47c6ff);
    ${shadow(0, 148, 215)}
  `,
  instagram: `
    background: linear-gradient(to right, #8a3ab9, #bc2a8d, #e95950, #fccc63);
    ${shadow(138, 58, 185)}
  `,
};

// eslint-disable-next-line no-unused-vars
export const Button = styled(({ type, ...rest }) => <a {...rest} />)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px;
  padding: 25px 25px 25px 20px;
  border-radius: 5px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'cinesilo';
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  ${({ type }) => BACKGROUNDS[type]}
  &:hover {
    opacity: 0.95;
  }
`;

export const xsButton = styled(Button)`
  padding: 0;
  width: 40px;
  height: 40px;
  margin: 0 15px 0 0;
  justify-content: center;
`;

export const mdButton = styled(Button)`
  padding: 0 20px;
  height: 50px;
  font-size: 14px;
  justify-content: center;
  svg:first-of-type {
    margin: 0 10px 0 0;
  }
  svg:last-of-type {
    display: none;
  }
  ${({ theme }) => theme.media.mobile`
    justify-content: space-around;
    svg:last-of-type {
      display: initial;
    }
  `}
`;
