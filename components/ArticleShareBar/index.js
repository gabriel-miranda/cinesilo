import React from 'react';
import SocialButton from 'components/SocialButton';
import Container from './styled';

function ArticleSocialBar() {
  return (
    <Container>
      <SocialButton type="facebook" size="md" share />
      <SocialButton type="twitter" size="md" share />
    </Container>
  );
}

export default ArticleSocialBar;
