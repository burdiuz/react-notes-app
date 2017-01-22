import { combineReducers } from 'redux';
import list from './list';
import note from './note';

export default combineReducers({
  list,
  note,
});
