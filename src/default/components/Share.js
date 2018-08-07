import React from 'react';
import PropTypes from 'prop-types';
import { ShareButtonRectangle, ShareBlockStandard } from 'react-custom-share';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

const PostShare = props => {
  const { themeStyle, slug, title, siteUrl, excerpt } = props;

  const url = siteUrl + slug;

  const shareBlockProps = {
    url: url,
    button: ShareButtonRectangle,
    buttons: [
      { network: 'Twitter', icon: FaTwitter },
      { network: 'Facebook', icon: FaFacebook },
      { network: 'GooglePlus', icon: FaGooglePlus },
      { network: 'Linkedin', icon: FaLinkedin },
    ],
    text: title,
    longtext: excerpt,
  };

  return (
    <div className={`${themeStyle}`}>
      <ShareBlockStandard {...shareBlockProps} />
    </div>
  );
};

PostShare.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  siteUrl: PropTypes.string,
  themeStyle: PropTypes.string,
};

export default PostShare;
