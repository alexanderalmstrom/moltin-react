import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store';
import Root from './components/Root';

import './styles/index.scss'

const render = (Component) => (
	ReactDOM.render(
    <Provider store={configureStore()}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
)

if (document.getElementById('root')) {
	render(Root);
}