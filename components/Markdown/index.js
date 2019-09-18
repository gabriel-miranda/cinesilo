import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const IframeComponent = props => (
  <S.VideoWrapper>
    <iframe {...props} title="Youtube video" />
  </S.VideoWrapper>
);

const Image = ({ title, src }) => (
  <S.Image src={src} alt={title || 'Cinesilo imagen'} />
);

Image.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
};

Image.defaultProps = {
  title: null,
};

const overrides = {
  h2: S.Heading2,
  p: S.P,
  img: Image,
  iframe: IframeComponent,
};

const Markdown = ({ children }) => (
  <S.MarkdownWrapper options={{ overrides }}>{children}</S.MarkdownWrapper>
);

Markdown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Markdown;
