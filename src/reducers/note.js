import * as actions from 'src/actions/note';
import {
  ITEM_SELECTED as LIST_ITEM_SELECTED,
  ITEM_REMOVE as LIST_ITEM_REMOVE,
  CLEAR as LIST_CLEAR } from 'src/actions/list';

const initialState = {
  subject: '',
  text: '',
  createdOn: null,
};


const noteReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case LIST_CLEAR:
    case actions.CREATE:
      newState = {
        ...initialState,
        createdOn: Date.now(),
      };
      break;
    case actions.EDIT:
      newState = {
        ...action.data
      };
      break;
    case LIST_ITEM_SELECTED:
      newState = {
        ...initialState, // in case of deselect
        ...action.item,
      };
      break;
    case LIST_ITEM_REMOVE:
      newState = state;
      if (action.item.createdOn === state.createdOn) {
        newState = {
          ...initialState,
        };
      }
      break;
    default:
      newState = state || { ...initialState };
      break;
  }
  return newState;
};

export default noteReducer;
