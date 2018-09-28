import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

import style from '../styles/page';

const Page = props => {
  const { children, themeStyle = style, customStyle = '' } = props;

  return <div className={cx(themeStyle, customStyle)}>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Page;
