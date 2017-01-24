import React from 'react';
import Text from './Text';

const Heading = (props) => {
  const { style, children, ...rest } = props;
  return (
    <Text style={[{
          textAlign: 'center',
          fontWeight: '400',
          fontSize: 24,
          color: '#4285F4',
        }, style]} {...rest}>{children}</Text>
  );
};

export default Heading;
