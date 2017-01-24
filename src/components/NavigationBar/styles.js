/*
 * @flow
 */

import {
  StyleSheet,
} from 'react-native';
import { NAV_BAR_HEIGHT } from 'src/components/helpers';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4285F4',
  },
  leftButton: {
    height: NAV_BAR_HEIGHT,
    color: '#fff',
    textAlignVertical: 'center',
  }
});

export default styles;
