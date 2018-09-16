import React from 'react';
import PropTypes from 'prop-types';
import FacebookProvider, { Comments as FBComments } from 'react-facebook';
import { cx } from 'emotion';

const Comments = props => {
  const {
    slug,
    siteUrl,
    appId,
    themeStyle = '',
    customStyle = '',
    colorScheme = 'light',
  } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <FacebookProvider appId={appId}>
        <FBComments
          href={`${siteUrl}${slug}`}
          width="100%"
          colorScheme={colorScheme}
        />
      </FacebookProvider>
    </div>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  colorScheme: PropTypes.string,
};

export default Comments;
