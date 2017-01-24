/*
 * @flow
 */

import {
  StyleSheet,
  Platform,
} from 'react-native';
import { NAV_BAR_HEIGHT } from 'src/components/helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: NAV_BAR_HEIGHT,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    padding: 10,
  },
});

export default styles;
