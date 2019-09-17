import styled from 'styled-components';

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 25px 25px 20px;
  border-radius: 5px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'cinesilo';
  color: #fff;
  margin: 0 0 20px;
`;

export const Facebook = styled(Button)`
  background: linear-gradient(to right, #0063da, #0094d7);
  box-shadow: 0 2px 10px rgba(0, 99, 218, 0.5);
`;

export const Twitter = styled(Button)`
  background: linear-gradient(to right, #0094d7, #47c6ff);
  box-shadow: 0 2px 10px rgba(0, 148, 215, 0.5);
`;

export const Instagram = styled(Button)`
  background: linear-gradient(to right, #8a3ab9, #bc2a8d, #e95950, #fccc63);
  box-shadow: 0 2px 10px rgba(138, 58, 185, 0.5);
`;
