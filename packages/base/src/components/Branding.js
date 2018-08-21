import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

const Branding = props => {
  const { title, subTitle, themeStyle = '', customStyle = '' } = props;

  return (
    <Link className={cx(themeStyle, customStyle)} to="/">
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
