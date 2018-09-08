import React from 'react';

import style from '../styles/comments';
import BaseComments from '@react-website-themes/base/components/Comments';

const Comments = props => {
  const { themeStyle = style, ...rest } = props;

  return <BaseComments themeStyle={themeStyle} {...rest} />;
};

export default Comments;
