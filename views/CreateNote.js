/**
 * Created by Oleg Galaburda on 02.08.16.
 * @providesModule CreateNote
 */
import React, { Component } from 'react';
import { Route } from 'RouteList';
import notes, { Note } from 'Notes';
import BaseView from './../components/BaseView'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight
} from 'react-native';

export class CreateNote extends Component {

  onSave = () => {

  }

  onSaveAndNew = () => {

  }

  render() {
    return (
        <BaseView>
          <Text>
            Create Note
          </Text>
          <TextInput
              multiline={true}
              style={{
                flex: 1,
                borderColor: 0xFF0000FF,
                borderWidth: 4,
                textAlignVertical: 'top'
              }}
              placeholder='Enter Note text here...'
          />
          <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
          >
            <TouchableHighlight onPress={this.onSaveAndNew} >
              <Text>
                Save & New
              </Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.onSave} >
              <Text>
                Save
              </Text>
            </TouchableHighlight>
          </View>
        </BaseView>
    )
  }
}

export const route = Route.create('Create Note', 1, () => CreateNote);

CreateNote.route = route;

export default CreateNote
