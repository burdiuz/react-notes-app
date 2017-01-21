import { connect } from 'react-redux';
import { create } from 'src/actions/note';
import Add from './Add';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (note) => dispatch(create(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
