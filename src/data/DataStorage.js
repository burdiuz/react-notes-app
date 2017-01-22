/*
 * @flow
 */

import { AsyncStorage } from 'react-native';

export class DataStorage {
  static BASE_KEY = '@NotesApp::';

  read(key: string) {
    return AsyncStorage.getItem(DataStorage.getKey(key)).then((string) => {
      return string && JSON.parse(string);
    });
  }

  write(key: string, data) {
    return AsyncStorage.setItem(DataStorage.getKey(key), JSON.stringify(data));
  }

  static getKey(key: string) {
    return `${DataStorage.BASE_KEY}${key}`;
  }
}

const instance = new DataStorage();

export default instance;
