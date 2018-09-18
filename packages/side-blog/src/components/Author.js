import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/author';

const Author = props => {
  const {
    html,
    name = 'avatar',
    themeStyle = style,
    customStyle = '',
    avatar,
  } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      {avatar && <img src={avatar} alt={name} className="avatar" />}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

Author.propTypes = {
  html: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Author;
