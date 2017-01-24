/*
 * @flow
 */

import dataStorage from './DataStorage';

export class NotesStorage {
  static KEY = 'notes';

  get() {
    return dataStorage.read(NotesStorage.KEY);
  }

  set(data) {
    return dataStorage.write(NotesStorage.KEY, data);
  }
}

const instance = new NotesStorage();

export default instance;
