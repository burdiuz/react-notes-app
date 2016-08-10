/**
 * Created by Oleg Galaburda on 02.08.16.
 * @providesModule CreateNote
 */
import React from 'react';
import { Route } from 'RouteList';
import { StyleSheet, Text, View } from 'react-native';

const CreateNote = () => (
    <View>
      <Text>
        Create Note
      </Text>
    </View>
)

export const route = Route.create('Create Note', 1, CreateNote);

CreateNote.route = route;

export default CreateNote
