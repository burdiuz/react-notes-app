/**
 * Created by Oleg Galaburda on 09.08.16.
 * @providesModule NavBarContainer
 */

import React, { Component } from 'react';
import NavBar, {
    NavBarBase,
    RightButton,
    LeftButton,
    Title
} from './../components/NavBar';
import { route as CreateNoteRoute } from 'CreateNote'

class RouteMapper {

  onNext(navigator) {
    console.log('On PREV');
  }

  onPrev(navigator) {
    console.log('On NEXT');
  }

  onNew(navigator) {
    console.log('On NEW');
    navigator.push(CreateNoteRoute);
  }

  LeftButton(route, navigator, index, navState) {
    console.log('LeftButton Factory', route, navigator, index, navState)
    const props = {
      route, navigator, index, navState,
      onPrev: this.onPrev
    };
    return (
        <LeftButton {...props} />
    );
  }

  RightButton(route, navigator, index, navState) {
    const props = {
      route, navigator, index, navState,
      onNext: this.onNext,
      onNew: this.onNew
    };
    return (
        <RightButton {...props} />
    );
  }

  Title(route, navigator, index, navState) {
    const props = { route, navigator, index, navState };
    return (
        <Title {...props} />
    );
  }
}

const DEFAULT_ROUTE_MAPPER = new RouteMapper();

export class NavBarContainer extends NavBarBase {

  render() {
    return (
        <NavBar
            {...this.props}
            routeMapper={DEFAULT_ROUTE_MAPPER}
            ref={this.onRefNavBar}
        />
    )
  }
}

export default NavBarContainer
