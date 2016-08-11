/**
 * Created by Oleg Galaburda on 02.08.16.
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Navigator,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export const BAR_HEIGHT = 60;

export const NavButtonView = ({
    onPress,
    children
}) => (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.subContainer} >
        {children}
      </View>
    </TouchableOpacity>
);
NavButtonView.propTypes = {
  children: PropTypes.any.isRequired
};

export const NavButton = ({
    onPress,
    children
}) => {
  let result = null;
  if (children) {
    result = (
        <NavButtonView onPress={onPress} >
          <Text style={styles.buttonText} >
            {children}
          </Text>
        </NavButtonView>
    );
  }
  return result;
}
NavButton.propTypes = {
  children: PropTypes.any.isRequired
};

export const LeftButton = ({
    onPrev,
    navigator,
    index
}) => {
  console.log('LeftButton Comp', index)
  const list = navigator.getCurrentRoutes();
  return ( index
          ? (
          <NavButton onPress={() => onPrev(navigator)} >
            &lt; { list[list.length - 1].title }
          </NavButton>
      ) : null
  );
};
LeftButton.propTypes = {
  onPrev: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export const RightButton = ({
    onNext,
    onNew,
    navigator,
    index
}) => {
  const list = navigator.getCurrentRoutes();
  let result = null;
  console.log('RightButton Comp', index, list.length)
  if (index < list.length - 1) {
    result = (
        <NavButton onPress={() => onNext(navigator)} >
          {list[index + 1].title}  &gt;
        </NavButton>
    );
  } else if (index === 0) {
    result = (
        <NavButton onPress={() => onNew(navigator)} >
          Create New &gt;
        </NavButton>
    )
  }
  return result;
};
RightButton.propTypes = {
  onNext: PropTypes.func.isRequired,
  onNew: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
};

export const Title = ({
    route
}) => {
  return (
      <View style={styles.subContainer} >
        <Text style={styles.titleText} >
          { route.title }
        </Text>
      </View>
  );
};
Title.propTypes = {
  route: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

/* Stateless Component will not work because of
 https://github.com/facebook/react-native/issues/2560
 */

export class NavBarBase extends Component {

  _navigationBar = null;

  onRefNavBar = (bar) => {
    this._navigationBar = bar;
  }

  updateProgress(...rest) {
    console.log('updateProgress', rest, this._navigationBar);
    if (this._navigationBar) {
      this._navigationBar.updateProgress.apply(this._navigationBar, rest);
    }
  }
}

export class NavBar extends NavBarBase {

  static propTypes = {
    routeMapper: PropTypes.object.isRequired
  }

  render() {
    let { style, ...rest } = this.props;
    return (
        <Navigator.NavigationBar
            {...rest}
            style={[styles.navBar, style]}
            ref={this.onRefNavBar}
        />
    )
  }
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
