import React from 'react';
import PropTypes from 'prop-types';
import FacebookProvider, { Comments as FBComments } from 'react-facebook';
import { cx } from 'emotion';

import style from '../styles/comments';

class Comments extends React.Component {
  state = {
    hidden: true,
    slug: this.props.slug,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.slug !== state.slug) {
      return { hidden: true, slug: props.slug };
    }
    return null;
  }

  showWidget = e => {
    this.setState({
      hidden: false,
    });
  };

  render() {
    const {
      slug,
      siteUrl,
      appId,
      themeStyle = '',
      customStyle = style,
      colorScheme = 'light',
      onDemand = false,
      onDemandLabel = 'Would you like to add a comment?',
      icons: { message: Icon },
    } = this.props;

    return (
      <div className={cx(themeStyle, customStyle)}>
        {this.state.hidden && (
          <button className="demand" onClick={this.showWidget}>
            {onDemandLabel} {Icon && <Icon />}
          </button>
        )}
        {!this.state.hidden && (
          <FacebookProvider appId={appId}>
            <FBComments
              href={`${siteUrl}${slug}`}
              width="100%"
              colorScheme={colorScheme}
            />
          </FacebookProvider>
        )}
      </div>
    );
  }
}

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  colorScheme: PropTypes.string,
  onDemand: PropTypes.bool,
  onDemandLabel: PropTypes.string,
  icons: PropTypes.object,
};

export default Comments;
