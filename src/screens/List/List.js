/*
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  View,
  ScrollView,
  Alert,
} from 'react-native';

import NavigationHelper from 'src/components/NavigationHelper';
import Icon from 'react-native-vector-icons/Entypo';
import Text, { Heading } from 'src/components/Text';
import Screen from 'src/components/Screen';
import Button, { LinkButton } from 'src/components/Button';
import ListItem from './ListItem';

class List extends NavigationHelper {

  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      subject: PropTypes.string,
      text: PropTypes.string,
    })),
    listLoad: PropTypes.func.isRequired,
    listSave: PropTypes.func.isRequired,
    onItemSelected: PropTypes.func.isRequired,
    onItemRemove: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.listLoad();
  }

  _onItemSelected = (item) => {
    this.props.onItemSelected(item);
    this.goToEdit();
  };

  _onItemRemove = (item) => {
    this.props.onItemRemove(item);
  };

  _onClearAll = () => {
    Alert.alert(
      'Clear all',
      'Do you really want to remove all the notes?',
      [
        { text: 'Cancel', onPress: () => console.log('Forget, whatever'), style: 'cancel' },
        { text: 'Proceed', onPress: () => this.props.listClear() },
      ]);
  };
  _onCreateNew = () => {
    this.goToAdd();
  };

  render() {
    if (this.props.list && this.props.list.length) {
      return this.renderList();
    } else {
      return this.renderEmpty();
    }
  }

  renderEmpty() {
    return (
      <Screen>
        <View style={{
          flex: 1,
          justifyContent: 'center',
        }}>
          <Button
            label='Add note'
            icon={(<Icon name='add-to-list' size={30} color='#fff'/>)}
            onPress={this._onCreateNew}
            style={{
            marginHorizontal: 50,
          }} />
        </View>
      </Screen>
    );
  }

  renderList() {
    return (
      <Screen>
        <ScrollView>
          {
            this.props.list.map((item, index) => (
              <ListItem
                key={index}
                label={item.subject}
                onPress={() => this._onItemSelected(item)}
                onRemove={() => this._onItemRemove(item)}
              />
            ))
          }
        </ScrollView>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
          <LinkButton
            label='Clear All'
            icon={(<Icon name='trash' size={20} color='#4285F4'/>)}
            onPress={this._onClearAll}
            style={{
              marginHorizontal: 20,
            }} />
        </View>
      </Screen>
    );
  }
}

export default List;
