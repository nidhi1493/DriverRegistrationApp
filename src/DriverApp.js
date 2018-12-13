import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import AddDriver from './containers/AddDriver'

class DriverApp extends Component {
  render () {
    return (
      <View style={styles.container}>
        <AddDriver />
      </View>
    )
  }
}

export default DriverApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40

  }
})
