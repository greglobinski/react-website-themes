import React from 'react';
import PropTypes from 'prop-types';
import FacebookProvider, { Comments as FBComments } from 'react-facebook';

const Comments = props => {
  const { slug, siteUrl, themeStyle } = props;

  return (
    <div className={`${themeStyle}`}>
      <FacebookProvider appId={process.env.GATSBY_FACEBOOK_APPID}>
        <FBComments
          href={`${siteUrl}${slug}`}
          width="100%"
          colorScheme="light"
        />
      </FacebookProvider>
    </div>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  themeStyle: PropTypes.string,
};

export default Comments;
