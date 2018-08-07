import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = props => {
  const { footerLinks, copyrightNote, themeStyle } = props;

  return (
    <footer className={`${themeStyle}`}>
      <div
        className="links"
        dangerouslySetInnerHTML={{ __html: footerLinks }}
      />
      <div
        className="copyright"
        dangerouslySetInnerHTML={{ __html: copyrightNote }}
      />
    </footer>
  );
};

Footer.propTypes = {
  footerLinks: PropTypes.string,
  copyrightNote: PropTypes.string,
  themeStyle: PropTypes.string,
};

export default Footer;
