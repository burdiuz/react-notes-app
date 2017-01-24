import { connect } from 'react-redux';
import { edit } from 'src/actions/note';
import { onItemAdd } from 'src/actions/list';
import Add from 'src/screens/Add/Add';

const mapStateToProps = (state) => {
  return {
    note: state.note,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    save: (note) => {
      dispatch(edit(note));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
