import { connect } from 'react-redux';
import { update, cancel } from 'src/actions/note';
import Edit from './Edit';

const mapStateToProps = (state) => {
  return {
    note: state.current,
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
