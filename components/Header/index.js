import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import useActiveSection from 'modules/activesection/hook';
import MobileNav from 'components/Nav/mobile';
import DesktopNav from 'components/Nav/desktop';
import Container from 'components/Container';
import Film from 'components/Icons/film.svg';
import Video from 'components/Icons/video.svg';
import FastForward from 'components/Icons/fast-forward.svg';
import Facebook from 'components/Icons/facebook.svg';
import Twitter from 'components/Icons/twitter.svg';
import Instagram from 'components/Icons/instagram.svg';
import { Waypoint } from 'react-waypoint';
import useTranslations from 'modules/translations/hook';
import * as S from './styled';

function useScrollLock(lock) {
  useEffect(() => {
    document.body.style.overflow = lock ? 'hidden' : null;
  }, [lock]);
}

const Header = ({ post }) => {
  const t = useTranslations();
  const router = useRouter();
  const section = useActiveSection();
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const HeaderComponent =
    router.pathname === '/[slug]' ? S.SlugHeader : S.Header;
  useScrollLock(open);
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => setOpen(false));
    return function cleanup() {
      Router.events.off('routeChangeComplete', () => setOpen(false));
    };
  }, [open]);
  const as = router.pathname === '/' ? { as: 'h1' } : {};
  return (
    <>
      <S.SubHeader>
        <S.SubheaderContainer>
          <Link href="/[slug]" as={`/${post.slug}`}>
            <S.HeaderContent as="a" href={`/${post.slug}`}>
              <S.VideoIcon>
                <Video width="12" height="12" />
              </S.VideoIcon>
              <S.SubheaderText>{post.title}</S.SubheaderText>
              <FastForward width="12" height="12" />
            </S.HeaderContent>
          </Link>
          <S.FollowText>{t('follow_us')}</S.FollowText>
          <S.LinkList>
            <li>
              <S.Link to="facebook" aria-label="Link a Cinesilo Facebook">
                <Facebook width="14" height="14" />
              </S.Link>
            </li>
            <li>
              <S.Link to="twitter" aria-label="Link a Cinesilo Twitter">
                <Twitter width="14" height="14" />
              </S.Link>
            </li>
            <li>
              <S.Link to="instagram" aria-label="Link a Cinesilo Instagram">
                <Instagram width="14" height="14" />
              </S.Link>
            </li>
          </S.LinkList>
        </S.SubheaderContainer>
      </S.SubHeader>
      <Waypoint
        onLeave={() => setFixed(true)}
        onEnter={() => setFixed(false)}
      />
      <HeaderComponent fixed={fixed}>
        <Container>
          <S.HeaderContent justify>
            <Link href="/">
              <S.TitleContainer href="/">
                <Film />
                <S.Title {...as}>Cinesilo</S.Title>
              </S.TitleContainer>
            </Link>
            <MobileNav open={open} setOpen={setOpen} active={section} />
            <DesktopNav active={section} />
          </S.HeaderContent>
        </Container>
      </HeaderComponent>
    </>
  );
};

Header.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
