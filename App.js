
import { Provider } from 'react-redux';
import * as React from 'react';
import App from './src/index'
import store from './src/store'

export default function () {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  )
}

