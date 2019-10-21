import styled from 'styled-components';

export default styled.div`
  position: sticky;
  top: ${({ sticky }) => sticky || 0}px;
  padding: 0 0 10px;
`;
