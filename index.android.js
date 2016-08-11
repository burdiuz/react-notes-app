import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View,
    ScrollView,
    Dimensions
} from 'react-native';
import { RouteList, Route } from 'RouteList'
import CreateNote from 'CreateNote'
import EditNote from 'EditNote'
import MainMenu from 'MainMenu'
import NavBarContainer from 'NavBarContainer'
import HelloWorld from 'HelloWorld'

const ROUTES = new RouteList(
    MainMenu.route,
    CreateNote.route,
    EditNote.route
);

class ReactNotesApp extends Component {

  onLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    if (height > width) { // portrait
    } else { // landscape
    }
  }

  navigate = (route, navigator) => {
    return (
        <View style={styles.container} >
          {route.render()}
        </View>
    );
  }

  createNavBar() {
    return (
        <NavBarContainer/>
    )
  }

  render() {
    return (
        <Navigator
            initialRoute={ROUTES[0]}
            renderScene={this.navigate}
            navigationBar={this.createNavBar()}
            onLayout={this.onLayout}
            style={styles.app}

        />
    );
  }
}

const styles = StyleSheet.create({
  app: {},
  container: {
    flex: 1,
    paddingTop: 60
  }
})

AppRegistry.registerComponent('ReactNotesApp', () => ReactNotesApp);
