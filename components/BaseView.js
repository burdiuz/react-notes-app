/**
 * Created by Oleg Galaburda on 11.08.16.
 */
import React, { Component, PropTypes } from 'react';
import {
    View,
    StyleSheet
} from 'react-native'

export const BaseView = ({
    children,
    style,
    ...props
}) => {
  return (
      <View
          {...props}
          style={[styles.container, style]}
      >
        {children}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    borderColor: 0x000000FF,
    borderWidth: 1
  }
});

export default BaseView
