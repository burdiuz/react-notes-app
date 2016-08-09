/**
 * Created by Oleg Galaburda on 02.08.16.
 * @providesModule NavBar
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Navigator,
    Text,
    View,
    ScrollView,
    TouchableHighlight
} from 'react-native';

export const BAR_HEIGHT = 60;

export const NavButtonContainer = ({
    children
}) => (
    <TouchableHighlight>
      <View style={styles.subContainer} >
        {children}
      </View>
    </TouchableHighlight>
);

export const NavButton = ({
    children
}) => {
  let result = null;
  if (children) {
    result = (
        <NavButtonContainer>
          <Text style={styles.buttonText} >
            {children}
          </Text>
        </NavButtonContainer>
    );
  }
  return result;
}

export const LeftButton = (route, navigator, index, navState) => {
  const list = navigator.getCurrentRoutes();
  return ( index
          ? (
          <NavButton>
            &lt; { list[list.length - 1].title }
          </NavButton>
      ) : null
  );
};

export const RightButton = (route, navigator, index, navState) => {
  const list = navigator.getCurrentRoutes();
  return ( index < list.length - 1 ?
          (
              <NavButton>
                {list[index + 1].title}  &gt;
              </NavButton>
          ) :
          (
              <NavButton>
                Create New &gt;
              </NavButton>
          )
  );
};

export const Title = (route, navigator, index, navState) => {
  return (
      <View style={styles.subContainer} >
        <Text style={styles.titleText} >
          { route.title }
        </Text>
      </View>
  );
};

const RouteMapper = {
  LeftButton: LeftButton,
  RightButton: RightButton,
  Title: Title
};

export const NavBar = (props) => {
  let { style, ...rest } = props;
  return (
      <Navigator.NavigationBar
          {...rest}
          style={[styles.navBar, style]}
          routeMapper={RouteMapper}
      />
  )
}

const styles = StyleSheet.create({
  navBar: {
    height: BAR_HEIGHT,
    backgroundColor: 0xFFFFFFFF // RGBA
  },
  titleContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 28
  },
  subContainer: {
    flex: 1,
    height: BAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  buttonText: {
    fontSize: 20
  }
});

export default NavBar
