/*
 * @flow
 */

import notesStorage from 'src/data/NotesStorage';

const initialState = {
  list: [],
  selected: null,
};

export const listLoad = (state, action) => state;
export const listLoadComplete = (state, action) => (
  {
    ...state,
    list: action.list,
  }
);
export const listLoadError = (state, action) => state;
export const listSave = (state, action) => state;
export const listSaveComplete = (state, action) => state;
export const listSaveError = (state, action) => state;
export const listItemAdd = (state, action) => {
  const list = state.list.concat([action.item]);
  notesStorage.set(list);
  return ({
    ...state,
    list,
  });
};
export const listClear = (state, action) => {
  const list = [];
  notesStorage.set(list);
  return {
    ...state,
    list,
  };
};
export const listItemSelected = (state, action) => (
  {
    ...state,
    selected: action.item,
  }
);

export const listItemRemove = (state, action) => {
  const list = state.list.slice();
  const index = list.findIndex((item) => item.createdOn === action.item.createdOn);
  if (index >= 0) {
    list.splice(index, 1);
    notesStorage.set(list);
    return {
      ...state,
      list
    };
  }
  return state;
};


const listReducer = (state, action) => {
  const reducer = module.exports[action.type];
  let result = state || { ...initialState };
  if (action.type !== 'default' && reducer) {
    result = reducer(state, action);
  }
  return result;
};

export default listReducer;
