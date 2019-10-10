import React from 'react';
import PropTypes from 'prop-types';
import * as CONFIG from 'config';

const LinkSocial = ({ children, to, ...rest }) => (
  <a
    href={CONFIG[`${to.toUpperCase()}_URL`]}
    rel="noopener nofollow"
    // eslint-disable-next-line react/jsx-no-target-blank
    target="_blank"
    {...rest}
  >
    {children}
  </a>
);

LinkSocial.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default LinkSocial;
