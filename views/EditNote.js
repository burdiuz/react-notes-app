/**
 * Created by Oleg Galaburda on 02.08.16.
 * @providesModule EditNote
 */
import React from 'react';
import { Route } from 'RouteList';
import notes from 'Notes';
import { StyleSheet, Text, View } from 'react-native';

const EditNote = () => (
    <View>
      <Text>
        Edit Note
      </Text>
    </View>
)

export const route = Route.create('Edit Note', 0, EditNote);

EditNote.route = route;

export default EditNote
