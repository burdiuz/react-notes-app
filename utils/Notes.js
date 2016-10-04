/**
 * Created by Oleg Galaburda on 11.08.16.
 * @providesModule Notes
 */

import storage from './Storage'

export class Note {
  id = Note.generateId();
  title = ''
  message = ''

  valueOf() {
    return Object.assign({}, this);
  }

  static generateId() {
    return String(Date.now());
  }
}

class Notes {
  _list = [];
  _ids = {};

  async load() {
    const list = await storage.load();
    this._list = list.map((item) => Object.assign(new Note(), item));
  }

  create() {
    const note = new Note();
    this.add(note);
    return note;
  }

  get(index) {
    return this._list[index];
  }

  getById(id) {
    return this._ids[id];
  }

  getList() {
    return this._list.slice();
  }

  add(note) {
    if (note && !(note.id in this._ids)) {
      _list.push(note);
      _ids[note.id] = note;
      this.save();
    }
    return note;
  }

  remove(note) {
    if (note && note.id in this._ids) {
      delete this._ids[note.id];
      this._list = this._list.filter((item) => item.id !== note.id);
      this.save();
    }
  }

  save() {
    return storage.upload(this._list);
  }

  static instance = new Notes();
}

export default Notes.instance
