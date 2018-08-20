import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

import style from '../styles/footer';

const Footer = props => {
  const { links, copyright, themeStyle = style, customStyle = '' } = props;

  return (
    <footer className={cx(themeStyle, customStyle)}>
      <div className="links" dangerouslySetInnerHTML={{ __html: links }} />
      <div
        className="copyright"
        dangerouslySetInnerHTML={{ __html: copyright }}
      />
      <div className="credits">
        {/*
          Please consider to not remove the credits section.
          That's the best way to say you appreciate my work.

          Thank you

          Greg Lobinski
        */}
        Built with{' '}
        <a href="https://github.com/greglobinski/gatsby-starter-kit">
          GatsbyJS Starter Kit
        </a>{' '}
        | Design by{' '}
        <a href="https://github.com/greglobinski/react-website-themes">
          React Website Themes
        </a>.
      </div>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.string,
  copyright: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Footer;
