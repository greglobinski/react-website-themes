import PropTypes from 'prop-types';
import React from 'react';

import '../styles/variables';
import '../styles/global';
import style from '../styles/layout';

class Layout extends React.Component {
  state = {
    modifier: '',
  };

  componentDidMount() {
    this.setState({
      modifier: 'entry',
    });
  }

  render() {
    const { children, themeStyle = style } = this.props;
    const { modifier } = this.state;

    return (
      <div className={`${themeStyle} ${modifier}`}>
        <main>{children}</main>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  themeStyle: PropTypes.string,
};

export default Layout;
