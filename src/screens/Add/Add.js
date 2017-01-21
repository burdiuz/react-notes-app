/*
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import Screen from 'src/components/Screen';
import ButtonsBlock from './ButtonsBlock';
import { Input, MultilineInput } from 'src/components/Input';

// import styles from './styles';

class Add extends Component {
  state = {
    subject: '',
    text: '',
    added: new Date()
  };

  componentWillMount() {

  }

  _onSaveAndNew = () => {
    this.save();
  };
  _onSaveAndEdit = () => {
    this.save();
  };

  save() {

  }

  render() {
    return (
      <Screen>
        <Input
          placeholder='Note subject'
          style={{
          marginBottom: 10,
          }}
        />
        <MultilineInput
          placeholder='Note text should be here...'
          style={{
          flex: 1,
          textAlignVertical: 'top',
          paddingBottom: 10,
        }} />
        <ButtonsBlock
          onSaveAndNew={()=>false}
          onSaveAndEdit={()=>false}
        />
      </Screen>
    );
  }
}

export default Add;
