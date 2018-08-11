import React from 'react';
import PropTypes from 'prop-types';
import { ShareBlockStandard } from 'react-custom-share';

import style from '../styles/share';

const PostShare = props => {
  const { themeStyle = style, shareBlockProps } = props;

  return (
    <div className={`${themeStyle}`}>
      <ShareBlockStandard {...shareBlockProps} />
    </div>
  );
};

PostShare.propTypes = {
  themeStyle: PropTypes.string,
  shareBlockProps: PropTypes.object,
};

export default PostShare;
