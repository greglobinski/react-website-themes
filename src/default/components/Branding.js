import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Branding = props => {
  const { title, subTitle, themeStyle } = props;

  return (
    <Link className={`${themeStyle}`} to="/">
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
};

export default Branding;
