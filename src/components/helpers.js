/*
 * @flow
 */

import {
  Platform,
} from 'react-native';

export const NAV_BAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
