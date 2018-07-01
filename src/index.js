import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import TestTask from './containers/TestTask';
import { loadData } from './store/actions/taskActions';

import './index.css';

const store = configureStore();

store.dispatch(loadData());

render(
  <Provider store={store}>
    <TestTask />
  </Provider>,
  document.getElementById('root')
)
