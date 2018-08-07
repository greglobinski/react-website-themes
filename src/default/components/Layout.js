import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import themed from '../../utils/themed';
import Header from './Header';
import Footer from './Footer';
import header from '../styles/header';
import footer from '../styles/footer';

const HeaderThemed = themed({ themeStyle: header })(Header);
const FooterThemed = themed({ themeStyle: footer })(Footer);

const Layout = props => {
  const {
    children,
    footerLinks,
    copyrightNote,
    headerTitle,
    headerSubTitle,
    menu,
    themeStyle,
  } = props;

  return (
    <div className={`${themeStyle}`}>
      <HeaderThemed title={headerTitle} subTitle={headerSubTitle} menu={menu} />
      <main>{children}</main>
      <FooterThemed footerLinks={footerLinks} copyrightNote={copyrightNote} />
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
  themeStyle: PropTypes.string,
};

export default Layout;
