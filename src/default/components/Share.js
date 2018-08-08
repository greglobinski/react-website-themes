import React from 'react';
import PropTypes from 'prop-types';
import { ShareBlockStandard } from 'react-custom-share';

const PostShare = props => {
  const { themeStyle, shareBlockProps } = props;

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
