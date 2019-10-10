import React, { useState, useEffect } from 'react';
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
import Client from 'modules/client/main';
import { log } from 'modules/logger';
import useTranslations from 'modules/translations/hook';
import * as S from './styled';

const api = new Client();

function useRandomPost() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    async function getPosts() {
      try {
        const amount = 5;
        const {
          data: {
            posts: { items },
          },
        } = await api.get(`
          {
            posts(limit: ${amount}, skip: 4) {
              items {
                title
                slug
              }
            }
          }
        `);
        const _post = items[Math.floor(Math.random() * amount)];
        setPost(_post);
      } catch (e) {
        log.error('useRandomPost:error: 💥 ', e);
      }
    }
    getPosts();
  }, []);
  return post;
}

const Header = () => {
  const t = useTranslations();
  const router = useRouter();
  const section = useActiveSection();
  const [open, setOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const post = useRandomPost();
  const HeaderComponent =
    router.pathname === '/[slug]' ? S.SlugHeader : S.Header;
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => setOpen(false));
    return function cleanup() {
      Router.events.off('routeChangeComplete', () => setOpen(false));
    };
  }, [open]);
  const as = router.pathname === '/' ? { as: 'h1' } : {};
  const loading = !post;
  return (
    <>
      <S.SubHeader>
        <S.SubheaderContainer>
          <S.HeaderContent as="a" href={post ? `/${post.slug}` : null}>
            <S.VideoIcon>
              <Video width="12" height="12" />
            </S.VideoIcon>
            <S.SubheaderText loading={loading}>
              {!loading && post.title}
            </S.SubheaderText>
            <FastForward width="12" height="12" />
          </S.HeaderContent>
          <S.FollowText>{t('follow_us')}</S.FollowText>
          <S.LinkList>
            <li>
              <S.Link to="facebook">
                <Facebook width="14" height="14" />
              </S.Link>
            </li>
            <li>
              <S.Link to="twitter">
                <Twitter width="14" height="14" />
              </S.Link>
            </li>
            <li>
              <S.Link to="instagram">
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

export default Header;
