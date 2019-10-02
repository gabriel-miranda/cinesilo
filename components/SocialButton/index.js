import React from 'react';
import PropTypes from 'prop-types';
import Facebook from 'components/Icons/facebook.svg';
import Instagram from 'components/Icons/instagram.svg';
import Twitter from 'components/Icons/twitter.svg';
import FastForward from 'components/Icons/fast-forward.svg';
import useTranslations from 'modules/translations/hook';
import * as S from './styled';

const TYPES = {
  FB: 'facebook',
  TW: 'twitter',
  IG: 'instagram',
};

function getComponent(type) {
  switch (type) {
    case TYPES.FB:
      return S.Facebook;
    case TYPES.TW:
      return S.Twitter;
    case TYPES.IG:
      return S.Instagram;
    default:
      return S.Facebook;
  }
}

function getIcon(type) {
  switch (type) {
    case TYPES.FB:
      return Facebook;
    case TYPES.TW:
      return Twitter;
    case TYPES.IG:
      return Instagram;
    default:
      return Facebook;
  }
}

function getText(share) {
  if (share) {
    return 'share';
  }
  return 'follow';
}

const SocialButton = ({ type, size, share, ...rest }) => {
  const Component = getComponent(type);
  const Icon = getIcon(type);
  const t = useTranslations();
  const prefix = getText(share);
  return (
    <Component {...rest} size={size}>
      <Icon height="20" />
      {size !== 'xs' && t(`${prefix}_${type}`)}
      {(size === 'md' || size === 'lg') && <FastForward height="20" />}
    </Component>
  );
};

SocialButton.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 's', 'md', 'lg']),
  share: PropTypes.bool,
};

SocialButton.defaultProps = {
  size: 'lg',
  share: false,
};

export default SocialButton;
