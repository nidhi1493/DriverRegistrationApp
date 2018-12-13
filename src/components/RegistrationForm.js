import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import DriverApp from '../DriverApp'

import store from '../store'
import { Provider } from 'react-redux'

export default class RegistrationForm extends Component {
  render () {
    return (
      <Provider store={store}>
        <DriverApp />
      </Provider>
    )
  }
}
AppRegistry.registerComponent(RegistrationForm, () => RegistrationForm)
