import React from 'react';
import { useRouter } from 'next/router';
import SocialButton from 'components/SocialButton';
import Share from 'components/Icons/share.svg';
import { BASE_URL } from 'config';
import * as S from './styled';

function setClipboardText(text) {
  navigator.clipboard.writeText(text);
}

function ArticleSocialBar() {
  const router = useRouter();
  const url = `${BASE_URL.replace(/https?:\/\//, '')}/${router.query.slug}`;
  return (
    <S.Container>
      <SocialButton type="facebook" size="xs" />
      <SocialButton type="twitter" size="xs" />
      <S.ShareContainer onClick={() => setClipboardText(url)}>
        <S.ShareIcon>
          <Share height={18} width={18} />
        </S.ShareIcon>
        <S.URLShare defaultValue={url} disabled />
      </S.ShareContainer>
    </S.Container>
  );
}

export default ArticleSocialBar;
