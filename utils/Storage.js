/**
 * Created by Oleg Galaburda on 11.08.16.
 */

import {
    AsyncStorage
} from 'react-native'

class Storage {

  async load() {
    const list = await AsyncStorage.getItem('@Storage:list');
    return list || [];
  }

  upload (list) {
    return AsyncStorage.setItem('@Storage:list', list || []);
  }

  static instance = new Storage();
}

export default Storage.instance
