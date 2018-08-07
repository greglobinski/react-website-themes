import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Layout = props => {
  const { children, themeStyle } = props;

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
