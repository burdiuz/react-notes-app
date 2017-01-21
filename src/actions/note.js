export const CREATE = 'NOTE_CREATE';
export const UPDATE = 'NOTE_UPDATE';
export const CANCEL = 'NOTE_EDIT_CANCEL';

export const create = (note) => {
  return {
    type: CREATE,
    data: note,
  };
};
export const update = (note) => {
  return {
    type: UPDATE,
    data: note,
  };
};
export const cancel = () => {
  return {
    type: CANCEL,
  };
};
