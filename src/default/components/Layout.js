import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = props => {
  const {
    children,
    footerLinks,
    copyrightNote,
    headerTitle,
    headerSubTitle,
    menu,
    themeStyle
  } = props;

  return (
    <div className={`${themeStyle}`}>
      <Header title={headerTitle} subTitle={headerSubTitle} menu={menu} />
      <main>{children}</main>
      <Footer footerLinks={footerLinks} copyrightNote={copyrightNote} />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footerLinks: PropTypes.string,
  copyrightNote: PropTypes.string,
  headerTitle: PropTypes.string,
  headerSubTitle: PropTypes.string,
  menu: PropTypes.array,
  themeStyle: PropTypes.string
};

export default Layout;
