/*
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import * as routes from 'src/routes';
import styles from './styles';

class NavigationHelper extends Component {

  static contextTypes = {
    navigator: PropTypes.object
  };

  get navigator() {
    return this.context.navigator;
  }

  goToList = () => {
    this.navigator.popToTop();
  };

  goToEdit = () => {
    this.navigator.push(routes.edit());
  };

  goToAdd = () => {
    this.navigator.push(routes.add());
  };

  goBack = () => {
    this.navigator.pop();
  };
}

export default NavigationHelper;
