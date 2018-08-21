import React from 'react';

import style from '../styles/hero';
import BaseHero from '@react-website-themes/base/components/Hero';

const Hero = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseHero themeStyle={themeStyle} {...rest} />;
};

export default Hero;
