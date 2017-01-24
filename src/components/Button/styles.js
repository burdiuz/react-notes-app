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
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  linkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkUnderline: {
    borderBottomWidth: 1,
    borderBottomColor: '#4285F4',
  },
  link: {
    color: '#4285F4',
  },
  text: {
    marginLeft: 10,
    color: '#fff',
    textAlignVertical: 'center',
  },
});

export default styles;
