import React from 'react';

const themed = ({ themeStyle }) => WrappedComponent => {
  const Themed = props => {
    return <WrappedComponent themeStyle={`${themeStyle}`} {...props} />;
  };

  return Themed;
};

export default themed;
