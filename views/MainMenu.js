/**
 * Created by Oleg Galaburda on 02.08.16.
 * @providesModule MainMenu
 */
import React, { Component } from 'react';
import { Route } from 'RouteList';
import notes from 'Notes';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    ListView,
    AsyncStorage,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

class MainMenu extends Component {

  listSource;
  listData;

  constructor(props, context) {
    super(props, context);
    this.listSource = new ListView.DataSource({ rowHasChanged: (k, l) => k !== l })
  }

  componentWillMount() {
    this.setState({
      selectedItem: null,
      list: this.listSource.cloneWithRows([])
    });
    console.log('init state');
    this.reload();
  }

  reload() {
    AsyncStorage.getItem('notes').then((data) => {
      this.listData = data || [
            'My note #01',
            'My note #02',
            'My note #03',
            'My note #04',
            'My note #05',
            'My note #06',
            'My note #07',
            'My note #08',
            'My note #09',
            'My note #10',
            'My note #11',
            'My note #12',
            'My note #13',
            'My note #14',
            'My note #15',
            'My note #16',
            'My note #17',
            'My note #18',
            'My note #19',
            'My note #20'
          ];
      this.setState({
        list: this.listSource.cloneWithRows(this.listData)
      });
    });
  }

  changeSelection = (item) => {
    this.setState({
      selectedItem: item,
      list: this.listSource.cloneWithRows(this.listData)
    })
    return true;
  }

  renderItem = (item, sectionID, rowID, highlightRow) => {
    const onPress = () => {
      if (this.changeSelection(item)) {
        highlightRow(sectionID, rowID);
      }
    };

    return (
        <NoteListItem
            onPress={onPress}
            style={{
              backgroundColor: this.state.selectedItem === item ? 0xEEEEEEFF : undefined
            }}
        >
          {item}
        </NoteListItem>
    )
  }

  render() {
    console.log(this.state)
    return (
        <View style={styles.container} >
          <View style={styles.inputArea} >
            <View style={{ flex: 0.2 }} />
            <TextInput
                style={styles.filterInput} />
            <View style={{ flex: 0.2 }} />
          </View>
          <ListView
              style={{ flex: 1 }}
              dataSource={this.state.list}
              renderRow={this.renderItem}
          />
        </View>
    )
  }
}
/*
 <ScrollView style={{ flex: 1 }} >
 {
 this.state.list.map((item, index) => (
 <NoteListItem key={'list-item-'+index} style={{
 backgroundColor: index % 2 ? 0xFFFFFFFF : 0xEEEEEEFF
 }} >{item}</NoteListItem>
 ))
 }
 </ScrollView>
 */

MainMenu.route = Route.create('Notes', 0, () => <MainMenu/>);

const NoteListItem = ({
    onPress,
    style,
    children
}) => {
  console.log('NoteListItem', children, style)
  return (
      <TouchableOpacity onPress={onPress} >
        <View style={[{ flexDirection: 'row', padding: 10 }, style]} >
          <Text style={{ fontSize: 18 }} >
            {children}
          </Text>
        </View>
      </TouchableOpacity>
  )
}
/**
 * item renderer factory method
 * @param item
 */
NoteListItem.create = (item, onPress) => (
    <NoteListItem onPress={onPress} >
      {item}
    </NoteListItem>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {},
  inputArea: {
    flexDirection: 'row',
    paddingBottom: 20
  },
  filterInput: {
    flex: 0.6,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})

export default MainMenu
