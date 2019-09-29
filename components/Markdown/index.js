import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const IframeComponent = props => (
  <S.VideoWrapper>
    <iframe {...props} title="Youtube video" />
  </S.VideoWrapper>
);

const P = props => {
  const { children } = props;
  return children.some(child => typeof child === 'string') ? (
    <S.P {...props} />
  ) : (
    <>{children}</>
  );
};

P.propTypes = {
  children: PropTypes.node.isRequired,
};

const overrides = {
  h2: S.Heading2,
  p: P,
  img: S.Image,
  iframe: IframeComponent,
};

const Markdown = ({ children }) => (
  <S.MarkdownWrapper options={{ overrides }}>{children}</S.MarkdownWrapper>
);

Markdown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Markdown;
