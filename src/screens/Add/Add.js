/*
 * @flow
 */

import React, { PropTypes } from 'react';
import {
  View,
} from 'react-native';
import NavigationHelper from 'src/components/NavigationHelper';
import Screen from 'src/components/Screen';
import ButtonsBlock from './ButtonsBlock';
import { Input, MultilineInput } from 'src/components/Input';

// import styles from './styles';

class Add extends NavigationHelper {

  static propTypes = {
    note: PropTypes.shape({
      subject: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      createdOn: PropTypes.any,
    }),
    save: PropTypes.func.isRequired,
  };

  static contextTypes = {
    navigator: PropTypes.object
  };

  state = {
    subject: '',
    text: '',
  };

  componentWillMount() {
    console.log(this.props.note);
    this.setState({
      ...this.props.note,
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
    this.goToAdd();
  };
  _onSaveAndList = () => {
    this.save();
    this.goToList();
  };

  save() {
    const { subject, text, createdOn } = this.state;
    this.props.save({
      subject,
      text,
      createdOn: createdOn || Date.now(),
    });
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
          onSaveAndNew={this._onSaveAndNew}
          onSaveAndList={this._onSaveAndList}
        />
      </Screen>
    );
  }
}

export default Add;
