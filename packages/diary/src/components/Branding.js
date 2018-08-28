import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

import style from '../styles/branding';

const Branding = props => {
  const { title, subTitle, themeStyle = style, customStyle = '', logo } = props;

  return (
    <Link className={cx(themeStyle, customStyle)} to="/">
      <img src={logo} alt={title} />
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </Link>
  );
};

Branding.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  logo: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Branding;
