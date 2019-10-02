import React from 'react';
import PropTypes from 'prop-types';
import Time from 'components/Time';
import { Layout, LeftContent } from 'components/Layout';
import * as S from './styled';

const ArticleHeader = ({ children, created, description, bg }) => (
  <S.Header>
    <S.Overlay />
    <S.Background bg={bg} />
    <S.Content>
      <Layout>
        <LeftContent>
          <S.Title>{children}</S.Title>
          <Time>{created}</Time>
          <S.Description>{description}</S.Description>
        </LeftContent>
      </Layout>
    </S.Content>
  </S.Header>
);

ArticleHeader.propTypes = {
  children: PropTypes.node.isRequired,
  created: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
};

export default ArticleHeader;
