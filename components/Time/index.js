import React from 'react';
import PropTypes from 'prop-types';
import StyledTime from './styled';

const formatDate = date => new Date(date).toDateString().split(' ');

const Time = ({ children }) => {
  const [, month, day, year] = formatDate(children);
  return (
    <StyledTime>
      {month} {day}, {year}
    </StyledTime>
  );
};

Time.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Time;
