import React, { Component } from 'react'
import HomeScreen from './src/components/HomeScreen'
import RegistrationForm from './src/components/RegistrationForm'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import DriverSort from './src/components/DriverSort'
import store from './src/store'
import { Provider } from 'react-redux'
import DriverSearch from './src/components/DriverSearch'

const RootStack = createStackNavigator(
  {
    Homes: HomeScreen,
    Register: RegistrationForm,
    Sort: DriverSort,
    Search: DriverSearch
  },
  {
    initialRouteName: 'Homes'
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
