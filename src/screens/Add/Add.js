/*
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';
import Screen from 'src/components/Screen';
import ButtonsBlock from './ButtonsBlock';
import { Input, MultilineInput } from 'src/components/Input';

// import styles from './styles';

class Add extends Component {

  static propTypes = {
    subject: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  state = {
    subject: '',
    text: '',
  };

  componentWillMount() {
    this.setState({
      subject: this.props.subject || '',
      text: this.props.text || '',
    })
  }

  _onSubjectChange = (subject: string) => {
    this.setState({
      subject,
    });
  };

  _onTextChange = (text: string) => {
    this.setState({
      text,
    });
  };

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
          value={this.state.subject}
          onChangeText={this._onSubjectChange}
          placeholder='Note subject'
          style={{
          marginBottom: 10,
          }}
        />
        <MultilineInput
          value={this.state.text}
          onChangeText={this._onTextChange}
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

console.log(module.exports);
