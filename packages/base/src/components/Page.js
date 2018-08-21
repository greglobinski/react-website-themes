import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

const Page = props => {
  const { children, themeStyle = '', customStyle = '' } = props;

  return <div className={cx(themeStyle, customStyle)}>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Page;
