import PropTypes from 'prop-types';
import React from 'react';

const Footer = props => {
  const { links, copyright, themeStyle } = props;

  return (
    <footer className={`${themeStyle}`}>
      <div className="links" dangerouslySetInnerHTML={{ __html: links }} />
      <div
        className="copyright"
        dangerouslySetInnerHTML={{ __html: copyright }}
      />
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.string,
  copyright: PropTypes.string,
  themeStyle: PropTypes.string,
};

export default Footer;
