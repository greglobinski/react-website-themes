import React from 'react';

import style from '../styles/list';
import BaseList from '@react-website-themes/base/components/List';

const List = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseList themeStyle={themeStyle} {...rest} />;
};

export default List;
