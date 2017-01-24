/*
 * @flow
 */

import React, { PropTypes } from 'react';
import { NAV_BAR_HEIGHT } from 'src/components/helpers';
import {Heading} from 'src/components/Text';

import styles from './styles';

const Title = ({
  text,
  style,
}) => {
  return (<Heading style={{
    height: NAV_BAR_HEIGHT,
    color: '#fff',
    marginLeft: 40,
    textAlignVertical: 'center',
  }}>{text}</Heading>);
};

export default Title;
