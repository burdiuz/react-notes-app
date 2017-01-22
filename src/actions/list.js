/*
 * @flow
 */

import notesStorage from 'src/data/NotesStorage';

export const LOAD = 'listLoad';
export const LOAD_COMPLETE = 'listLoadComplete';
export const LOAD_ERROR = 'listLoadError';
export const SAVE = 'listSave';
export const SAVE_COMPLETE = 'listSaveComplete';
export const SAVE_ERROR = 'listSaveError';
export const ITEM_SELECTED = 'listItemSelected';

const generic = (type) => (
  {
    type,
  }
);

export const listLoad = () => {
  return (dispatch) => {
    dispatch(generic(LOAD));
    console.log('List called!');
    notesStorage.get().then(
      (list) => {
        console.log('List loaded!');
        dispatch({
          type: LOAD_COMPLETE,
          list: list || [
            {subject: 'First note', text: 'some text here'},
            {subject: 'Second note', text: 'some text here'},
            {subject: 'Third note', text: 'some text here'},
          ],
        });
      },
      () => dispatch(generic(LOAD_ERROR))
    );
  }
};

export const listSave = (list) => {
  return (dispatch) => {
    dispatch(generic(SAVE));
    notesStorage.set(list).then(
      () => dispatch(generic(SAVE_COMPLETE)),
      () => dispatch(generic(SAVE_ERROR))
    );
  }
};

export const onItemSelected = (item) => (
  {
    type: ITEM_SELECTED,
    item,
  }
);
