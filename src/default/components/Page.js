import PropTypes from 'prop-types';
import React from 'react';

import themed from '../../utils/themed';

import Article from './Article';
import Bodytext from './Bodytext';
import Heading from './Heading';

import article from '../styles/article';
import bodytext from '../styles/bodytext';
import heading from '../styles/heading';

const ArticleThemed = themed({ themeStyle: article })(Article);
const BodytextThemed = themed({ themeStyle: bodytext })(Bodytext);
const HeadingThemed = themed({ themeStyle: heading })(Heading);

const Page = props => {
  const {
    page: {
      html,
      frontmatter: { title },
    },
    themeStyle,
  } = props;

  return (
    <div className={`${themeStyle}`}>
      <ArticleThemed>
        <HeadingThemed title={title} />
        <BodytextThemed html={html} />
      </ArticleThemed>
    </div>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
  themeStyle: PropTypes.string,
};

export default Page;
