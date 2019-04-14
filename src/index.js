// index.js

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import { configureStore } from './store'
import App from './components/App'

import './styles/index.scss'

const render = (Component) => (
	ReactDOM.render(
    <Provider store={configureStore()}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  )
)

if (document.getElementById('app')) {
	render(App)
}

if (module.hot && document.getElementById('app')) {
  module.hot.accept('./components/App', () => {
    render(App)
  })
}