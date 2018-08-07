import PropTypes from 'prop-types';
import React from 'react';

const Page = props => {
  const { children, themeStyle } = props;

  return <div className={`${themeStyle}`}>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node,
  themeStyle: PropTypes.string,
};

export default Page;
