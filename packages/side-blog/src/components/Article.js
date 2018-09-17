import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/article';

class Article extends React.Component {
  state = {
    entryClass: '',
  };

  componentDidMount() {
    this.addEntryStyle();
    this.props.updateArticleRendered(true);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevPath = prevProps.location.pathname;
    const path = this.props.location.pathname;

    if (prevPath !== path) {
      this.addEntryStyle();
      this.props.updateArticleRendered(true);
    }
  }

  addEntryStyle() {
    this.setState({
      entryClass: 'entry',
    });

    setTimeout(() => {
      this.setState({
        entryClass: '',
      });
    }, 500);
  }

  render() {
    const { children, themeStyle = style, customStyle = '' } = this.props;

    return (
      <article
        className={`${cx(themeStyle, customStyle)} ${this.state.entryClass}`}
      >
        {children}
      </article>
    );
  }
}

Article.propTypes = {
  children: PropTypes.node.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  location: PropTypes.object.isRequired,
  articleRendered: PropTypes.bool.isRequired,
  updateArticleRendered: PropTypes.func.isRequired,
};

export default Article;
