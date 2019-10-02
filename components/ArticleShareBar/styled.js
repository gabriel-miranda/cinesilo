import styled from 'styled-components';

export default styled.div`
  display: flex;
  padding: 0 70px 20px;
  a {
    flex: 1;
    &:first-child {
      margin-right: 10px;
    }
    &:last-child {
      margin-left: 10px;
    }
  }
`;
