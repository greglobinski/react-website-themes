import React from 'react';
import PropTypes from 'prop-types';

import Branding from './Branding';
import MainMenu from './MainMenu';

const Header = props => {
  const { title, subTitle, menu } = props;

  return (
    <header className="header">
      <Branding title={title} subTitle={subTitle} />
      {menu && <MainMenu items={menu} />}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  menu: PropTypes.array
};

export default Header;
