import React from 'react';
import PropTypes from 'prop-types';
import Calendar from 'components/Icons/calendar.svg';
import * as S from './styled';

const formatDate = date => new Date(date).toDateString().split(' ');

const Time = ({ children }) => {
  const [, month, day, year] = formatDate(children);
  return (
    <S.TimeContainer>
      <Calendar width="14" height="14" />
      <S.Time>
        {month} {day}, {year}
      </S.Time>
    </S.TimeContainer>
  );
};

Time.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Time;
