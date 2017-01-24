import { connect } from 'react-redux';
import { create } from 'src/actions/note';
import { onItemAdd } from 'src/actions/list';
import Add from './Add';

const mapStateToProps = (state) => {
  return {
    note: {
      subject: '',
      text: '',
      createdOn: new Date(),
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    save: (note) => {
      dispatch(onItemAdd(note));
      dispatch(create());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
