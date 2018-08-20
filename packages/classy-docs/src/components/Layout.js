import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

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
    const { children, themeStyle = style, customStyle = '' } = this.props;
    const { modifier } = this.state;

    return (
      <div className={cx(themeStyle, customStyle, modifier)}>
        <main>{children}</main>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Layout;
