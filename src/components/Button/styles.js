/*
 * @flow
 */

import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  touchable: {},
  gradient: {
    flexDirection: 'row',
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  linkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#666666',
  },
  link: {
    color: '#000066',
  },
  text: {
    marginLeft: 10,
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
