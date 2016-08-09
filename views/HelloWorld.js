/**
 * Created by Oleg Galaburda on 02.08.16.
 * @providesModule HelloWorld
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Route } from 'RouteList'

const HelloWorld = () => {
  return (
      <View style={styles.container} >
        <Text style={styles.welcome} >
          Notes App on REACT Native
        </Text>
        <Text style={styles.instructions} >
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions} >
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
  );
}

HelloWorld.route = Route.create('Hello REACT!', 0, HelloWorld);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default HelloWorld
