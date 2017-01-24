/*
 * @flow
 */
// create new note, user clicked "New" button. affects current note only.
export const CREATE = 'noteCreate';
// edit already existing note, user clicked "Edit" button.
export const EDIT = 'noteEdit';
export const SAVE = 'noteSave';

export const create = () => (
  {
    type: CREATE,
  }
);

export const edit = (note) => (
  {
    type: EDIT,
    data: note,
  }
);

export const onSave = (note) => (
  {
    type: SAVE,
    data: note,
  }
);
