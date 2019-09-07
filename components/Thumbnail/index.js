import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import querystring from 'querystring';
import Time from 'components/Time';
import Video from 'components/Icons/video.svg';
import Fire from 'components/Icons/fire.svg';
import Tv from 'components/Icons/tv.svg';
import { CATEGORIES } from 'config';
import * as S from './styled';

export const SIZES = {
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
};

const getArticle = size => {
  switch (size) {
    case SIZES.LG:
      return S.ArticleLarge;
    case SIZES.MD:
      return S.ArticleMedium;
    default:
      return S.Article;
  }
};

const getTitle = size => {
  switch (size) {
    case SIZES.LG:
      return S.TitleLarge;
    case SIZES.MD:
      return S.TitleMedium;
    default:
      return S.Title;
  }
};

const getIcon = category => {
  switch (category) {
    case CATEGORIES.movies:
      return Video;
    case CATEGORIES.series:
      return Tv;
    case CATEGORIES.anime:
      return Fire;
    default:
      return Video;
  }
};

function getImageSize(index) {
  switch (index) {
    case SIZES.LG:
      return { width: 585, height: 600 };
    case SIZES.MD:
      return { width: 585, height: 300 };
    default:
      return { width: 300, height: 300 };
  }
}

function getImage({ url, format = 'jpg', width, height, fit = 'thumb' }) {
  const query = { fm: format, w: width, h: height, fit };
  return `${url}?${querystring.stringify(query)}`;
}

const Thumbnail = ({
  slug,
  size,
  title,
  created,
  description,
  category,
  image,
}) => {
  const CategoryIcon = getIcon(category);
  const ArticleComponent = getArticle(size);
  const TitleComponent = getTitle(size);
  return (
    <ArticleComponent key={title}>
      <S.Figure>
        <S.Image
          src={getImage({ url: image.url, ...getImageSize(size) })}
          alt={image.title}
        />
      </S.Figure>
      <Link href="[slug]" as={`/${slug}`}>
        <S.Content category={category}>
          <S.Icon category={category}>
            <CategoryIcon width="20" height="20" />
          </S.Icon>
          {(title || created || description) && (
            <S.Footer>
              {title && <TitleComponent type={size}>{title}</TitleComponent>}
              {created && <Time>{created}</Time>}
              {description && <S.description>{description}</S.description>}
            </S.Footer>
          )}
        </S.Content>
      </Link>
    </ArticleComponent>
  );
};

Thumbnail.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.string,
  created: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

Thumbnail.defaultProps = {
  title: null,
  size: null,
  created: null,
  description: null,
};

export default Thumbnail;
