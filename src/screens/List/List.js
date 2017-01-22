/*
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import Text, { Heading } from 'src/components/Text';
import Screen from 'src/components/Screen';
import Button from 'src/components/Button';

const ListItem = (props) => {
  const { label, style, ...rest } = props;
  return (
    <TouchableHighlight
      activeOpacity={0.3}
      underlayColor='#ccc'
      style={[{
        backgroundColor: '#fff',
        padding: 20,
      }, style]}
      {...rest}>
      <View>
        <Text>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

class List extends Component {

  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      subject: PropTypes.string,
      text: PropTypes.string,
    })),
    listLoad: PropTypes.func.isRequired,
    listSave: PropTypes.func.isRequired,
    onItemSelected: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.props.listLoad();
    console.log(this.context.navigator);
  }

  _onItemSelected = (item) => {
    this.props.onItemSelected(item);
  };

  render() {
    return (
      <Screen>
        <Heading>RECORDED NOTES</Heading>
        <ScrollView>
          {
            this.props.list.map((item, index) => (
              <ListItem
                key={index}
                label={item.subject}
                onPress={() => this._onItemSelected(item)}
              />
            ))
          }
        </ScrollView>
        <Button label='Clear All' style={{
            marginHorizontal: 50,
          }} />
      </Screen>
    );
  }
}

export default List;
