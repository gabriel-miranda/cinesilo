import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Facebook from 'components/Icons/facebook.svg';
import Instagram from 'components/Icons/instagram.svg';
import Twitter from 'components/Icons/twitter.svg';
import FastForward from 'components/Icons/fast-forward.svg';
import useTranslations from 'modules/translations/hook';
import * as CONFIG from 'config';
import * as S from './styled';

export const TYPES = {
  FB: 'facebook',
  TW: 'twitter',
  IG: 'instagram',
};

function getComponent(size) {
  return S[`${size}Button`] || S.Button;
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

function getURL(type, share, url) {
  const PREFIX = type.toUpperCase();
  const SUFIX = share ? 'SHARE' : 'URL';
  return CONFIG[`${PREFIX}_${SUFIX}`] + (share ? url : '');
}

const SocialButton = ({ type, size, share, ...rest }) => {
  const Component = getComponent(size);
  const Icon = getIcon(type);
  const t = useTranslations();
  const prefix = getText(share);
  const router = useRouter();
  const url = `${CONFIG.BASE_URL}/${router.asPath}`;
  return (
    <Component
      {...rest}
      size={size}
      type={type}
      href={getURL(type, share, url)}
      rel="noopener nofollow"
      target="_blank"
    >
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
