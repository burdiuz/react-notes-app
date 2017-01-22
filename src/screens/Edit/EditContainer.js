import { connect } from 'react-redux';
import { update, cancel } from 'src/actions/note';
import Edit from './Edit';

//FIXME not exported as main component src/screens/Edit

const mapStateToProps = (state) => {
  return {
    note: state.note,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (note) => dispatch(update(note)),
    onCancel: () => dispatch(cancel())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Edit);
