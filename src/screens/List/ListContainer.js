import { listLoad, listSave, listClear, onItemSelected, onItemRemove } from 'src/actions/list';
import { connect } from 'react-redux';
import List from './List';

const mapStateToProps = (state) => ({
  // this contains list and selected properties declared in our initialState for list reducers
  ...state.list,
});

const mapDispatchToProps = (dispatch) => ({
  listLoad: () => dispatch(listLoad()),
  listSave: (list) => dispatch(listSave(list)),
  listClear: (list) => dispatch(listClear()),
  onItemSelected: (item) => dispatch(onItemSelected(item)),
  onItemRemove: (item) => dispatch(onItemRemove(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
