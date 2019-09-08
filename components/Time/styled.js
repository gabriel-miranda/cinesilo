import styled from 'styled-components';

export const Time = styled.time`
  font-size: 13px;
  margin: 2px 0 0 10px;
`;

export const TimeContainer = styled.span`
  display: flex;
  align-items: center;
  opacity: 0.8;
  color: ${({ grey }) => (grey ? '#666' : '#fff')};
  svg path {
    fill: ${({ grey }) => (grey ? '#666' : '#fff')};
  }
`;
