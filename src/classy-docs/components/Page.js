import PropTypes from 'prop-types';
import React from 'react';

import style from '../styles/page';

const Page = props => {
  const { children, themeStyle = style } = props;

  return <div className={`${themeStyle}`}>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node,
  themeStyle: PropTypes.string,
};

export default Page;
