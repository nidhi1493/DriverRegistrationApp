import React, {
  Component
} from 'react'

import {
  Text,
  View,
  StyleSheet,
  FlatList, AppRegistry, TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'

var sortJsonArray = require('sort-json-array')

class DriverSort extends Component {

    state = {
        sortByName: false
    };

  render () {
    return (

      <View style={styles.container}>
          <Text style={styles.titleText}> Driver Details</Text>
          <TouchableOpacity style={[styles.buttonContainer]}
              onPress={() => this.setState({sortByName: true})}>
              <Text style={styles.signUpText}>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer]}
               onPress={() => this.setState({sortByName: false})}>
               <Text style={styles.signUpText}>Registration Date</Text>
        </TouchableOpacity>
       {this.state.sortByName && <FlatList data={sortJsonArray(this.props.todos, 'name', 'asc')} renderItem={
        ({ item }) =>
          <View style={styles.emailItem}>
               <Text>{item.name}</Text>
               <Text style={styles.emailSubject}>{item.drivingLicence}</Text>
               <Text style={styles.emailSubject}>{item.registrationDate}</Text>
          </View>
      } />}
      {!this.state.sortByName && <FlatList data={sortJsonArray(this.props.todos, 'registrationDate', 'asc')} renderItem={
        ({ item }) =>
          <View style={styles.emailItem}>
               <Text>{item.name}</Text>
               <Text style={styles.emailSubject}>{item.drivingLicence}</Text>
               <Text style={styles.emailSubject}>{item.registrationDate}</Text>
          </View>
      } />}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = () => ({})

export default  (connect(mapStateToProps, mapDispatchToProps)(DriverSort))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b5ec',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  emailItem: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10,
    width : 300

  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput: {
    padding: 20,
    borderColor: '#00090c',
    borderWidth: 2
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    margin: 10,
    width: 250,
    borderRadius: 10,
    backgroundColor: '#FF4DFF',
},
titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    margin: 20,
    marginBottom: 20
  }
})

AppRegistry.registerComponent(DriverSort, () => DriverSort)
