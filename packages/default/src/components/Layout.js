import PropTypes from 'prop-types';
import React from 'react';
import 'typeface-open-sans';

import '../styles/global';
import style from '../styles/layout';

const Layout = props => {
  const { children, themeStyle = style } = props;

  return (
    <div className={`${themeStyle}`}>
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  themeStyle: PropTypes.string,
};

export default Layout;
