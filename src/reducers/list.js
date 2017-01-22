/*
 * @flow
 */

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
export const listItemSelected = (state, action) => (
  {
    ...state,
    selected: action.item,
  }
);


const listReducer = (state, action) => {
  const reducer = module.exports[action.type];
  let result = state || { ...initialState };
  if (action.type !== 'default' && reducer) {
    result = reducer(state, action);
  }
  return result;
};

export default listReducer;
