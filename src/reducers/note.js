import * as actions from 'src/actions/note';
import { ITEM_SELECTED } from 'src/actions/list';

const initialState = {
  subject: '',
  text: '',
  createdOn: null,
};


const noteReducer = (state, action) => {
  let newState;
  switch (action.type) {
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
    case ITEM_SELECTED:
      console.log(action);
      newState = {
        ...initialState, // in case of deselect
        ...action.item,
      };
      break;
    default:
      newState = state || { ...initialState };
      break;
  }
  return newState;
};

export default noteReducer;
