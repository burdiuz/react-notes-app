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
export const ITEM_ADD = 'listItemAdd';
export const ITEM_SELECTED = 'listItemSelected';
export const ITEM_REMOVE = 'listItemRemove';
export const CLEAR = 'listClear';

const generic = (type) => (
  {
    type,
  }
);

export const listLoad = () => {
  return (dispatch) => {
    dispatch(generic(LOAD));
    notesStorage.get().then(
      (list) => {
        dispatch({
          type: LOAD_COMPLETE,
          list: list || [],
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

export const onItemAdd = (item) => (
  {
    type: ITEM_ADD,
    item,
  }
);

export const listClear = () => (
  {
    type: CLEAR,
  }
);

export const onItemSelected = (item) => (
  {
    type: ITEM_SELECTED,
    item,
  }
);

export const onItemRemove = (item) => (
  {
    type: ITEM_REMOVE,
    item,
  }
);
