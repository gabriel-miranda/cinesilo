import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from 'components/Container';
import Film from 'components/Icons/film.svg';
import Menu from 'components/Icons/menu.svg';
import Video from 'components/Icons/video.svg';
import FastForward from 'components/Icons/fast-forward.svg';
import * as S from './styled';

const Header = () => {
  const router = useRouter();
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
                <Link href="/">Cinesilo</Link>
              </S.Title>
            </S.TitleContainer>
            <Menu />
          </S.HeaderContent>
        </Container>
      </S.Header>
    </>
  );
};

export default Header;
