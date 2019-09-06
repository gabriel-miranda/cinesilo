import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import useActiveSection from 'modules/activesection/hook';
import Container from 'components/Container';
import MobileNav from 'components/Nav/mobile';
import DesktopNav from 'components/Nav/desktop';
import Film from 'components/Icons/film.svg';
import Video from 'components/Icons/video.svg';
import FastForward from 'components/Icons/fast-forward.svg';
import * as S from './styled';

const Header = () => {
  const router = useRouter();
  const section = useActiveSection();
  const [open, setOpen] = useState(false);
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
        <Container>
          <S.HeaderContent>
            <S.VideoIcon>
              <Video width="12" height="12" />
            </S.VideoIcon>
            <S.SubheaderText>
              My hero academia temporada 4: Nuevo trailer, nuevo personaje
            </S.SubheaderText>
            <FastForward width="12" height="12" />
          </S.HeaderContent>
        </Container>
      </S.SubHeader>
      <S.Header>
        <Container>
          <S.HeaderContent justify>
            <S.TitleContainer>
              <Film />
              <S.Title {...as}>
                <Link href="/">
                  <a>Cinesilo</a>
                </Link>
              </S.Title>
            </S.TitleContainer>
            <MobileNav open={open} setOpen={setOpen} active={section} />
            <DesktopNav active={section} />
          </S.HeaderContent>
        </Container>
      </S.Header>
    </>
  );
};

export default Header;
