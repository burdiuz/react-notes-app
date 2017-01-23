/*
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  View,
  ScrollView,
  Alert,
} from 'react-native';
import * as routes from 'src/routes';

import Icon from 'react-native-vector-icons/Entypo';
import Text, { Heading } from 'src/components/Text';
import Screen from 'src/components/Screen';
import Button, { LinkButton } from 'src/components/Button';
import ListItem from './ListItem';

class List extends Component {

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

  static contextTypes = {
    navigator: PropTypes.object
  };

  get navigator() {
    return this.context.navigator;
  }

  componentWillMount() {
    this.props.listLoad();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // we have navigator here!
    console.log('NAVIGATOR', Boolean(nextContext.navigator));
  }

  _onItemSelected = (item) => {
    this.props.onItemSelected(item);
    this.navigator.push(routes.edit);
  };

  _onItemRemove = (item) => {
    this.props.onItemRemove(item);
  };

  _onClearAll = () => {
    Alert.alert(
      'Clear all',
      'Do you really want to remove all the notes adn shorten your life a little bit?',
      [
        { text: 'Cancel', onPress: () => console.log('Forget, whatever'), style: 'cancel' },
        { text: 'Proceed', onPress: () => this.props.listClear() },
      ]);
  };
  _onCreateNew = () => {
    // use router to display "Add" screen
    this.navigator.push(routes.add);
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
        <Heading>Nothing recorded yet</Heading>
        <View style={{
          flex: 1,
          justifyContent: 'center',
        }}>
          <Button
            label='Add first note'
            icon={(<Icon name='circle-with-plus' size={30} color='#fff'/>)}
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
        <Heading>RECORDED NOTES</Heading>
        <LinkButton
          icon={(<Icon name='circle-with-plus' size={30} color='#666666'/>)}
          label='Add new note'
          onPress={this._onCreateNew} />
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
        <Button
          label='Clear All'
          icon={(<Icon name='trash' size={30} color='#fff'/>)}
          onPress={this._onClearAll}
          style={{
            marginHorizontal: 50,
          }} />
      </Screen>
    );
  }
}

export default List;
