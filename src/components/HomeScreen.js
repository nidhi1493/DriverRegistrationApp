import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AppRegistry
} from 'react-native'

export default class HomeScreen extends Component {
  render () {
    return (

      <View style={styles.container}>

        <Text style={styles.titleText}> Driver Registration App</Text>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.signUpText}>Go to Registration Details</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}
          onPress={() => this.props.navigation.navigate('Search')}>
          <Text style={styles.signUpText}>Search</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}
          onPress={() => this.props.navigation.navigate('Sort')}>
          <Text style={styles.signUpText}>Driver Details</Text>
        </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b5ec'
  },
  inputContainer: {
    justifyContent: 'center',
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  signupButton: {
    backgroundColor: '#FF4DFF'
  },
  signUpText: {
    color: 'white'
  },
titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20
  }
})

AppRegistry.registerComponent(HomeScreen, () => HomeScreen)
