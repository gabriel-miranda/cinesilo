import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line no-unused-vars
const StyledContainer = styled(({ spacing, small, ...rest }) => (
  <div {...rest} />
))`
  max-width: 100%;
  margin: 0 auto;
  width: ${({ theme }) => theme.container.width};
  padding: ${({ theme }) => theme.container.padding};
`;

export default StyledContainer;
