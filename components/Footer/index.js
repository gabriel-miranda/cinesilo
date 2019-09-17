import React from 'react';
import Link from 'next/link';
import Container from 'components/Container';
import Film from 'components/Icons/film.svg';
import Facebook from 'components/Icons/facebook.svg';
import Twitter from 'components/Icons/twitter.svg';
import Instagram from 'components/Icons/instagram.svg';
import useTranslations from 'modules/translations/hook';
import { CATEGORIES } from 'config';
import * as S from './styled';

const Category = item => {
  const t = useTranslations();
  return <S.Category key={item}>{t(item)}</S.Category>;
};

const Footer = () => (
  <S.Footer>
    <Container>
      <S.Row>
        <S.Column>
          <S.TitleContainer>
            <Film height="20" />
            <S.Title>
              <Link href="/">
                <a>Cinesilo</a>
              </Link>
            </S.Title>
          </S.TitleContainer>
          <S.Description>
            cinesilo es el primer magazine argentino de cine y entretenimiento
            online. Te brindamos actualidad y calidad en materia de
            espectáculos, cine, series y anime junto con la mejor experiencia
            posible.
          </S.Description>
        </S.Column>
        <S.Column>
          <S.SubTitle>Categorías</S.SubTitle>
          <>{Object.keys(CATEGORIES).map(Category)}</>
        </S.Column>
        <S.Column>
          <S.SubTitle>Síguenos en nuestras redes</S.SubTitle>
          <S.Icon>
            <Facebook height="15" />
          </S.Icon>
          <S.Icon>
            <Twitter height="15" />
          </S.Icon>
          <S.Icon>
            <Instagram height="15" />
          </S.Icon>
        </S.Column>
      </S.Row>
    </Container>
    <S.InnerFooter>
      <S.InnerText as="small">
        Copyright © 2019 | cinesilo - cine, series y entretenimiento
      </S.InnerText>
    </S.InnerFooter>
  </S.Footer>
);

export default Footer;
