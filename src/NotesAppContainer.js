import React from 'react';
import { createStore, applyMiddleware, } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from 'src/reducers';
import NotesApp from './NotesApp';

const store = createStore(reducers, applyMiddleware(thunk));


const NotesAppContainer = () => (
  <Provider store={store}>
    <NotesApp />
  </Provider>
);

export default NotesAppContainer;
