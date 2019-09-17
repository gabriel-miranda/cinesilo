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

const SocialButton = ({ type, ...rest }) => {
  const Component = getComponent(type);
  const Icon = getIcon(type);
  const t = useTranslations();
  return (
    <Component {...rest}>
      <Icon height="20" />
      {t(`follow_${type}`)}
      <FastForward height="20" />
    </Component>
  );
};

SocialButton.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SocialButton;
