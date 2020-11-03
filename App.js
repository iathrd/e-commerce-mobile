import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Provider} from 'react-redux'

import store from './src/redux/store'

import Main from './src/screens/Main'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Main/>
      </Provider>
    )
  }
}
