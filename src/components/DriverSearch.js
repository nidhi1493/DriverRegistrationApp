import React, {
  Component
} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AppRegistry
} from 'react-native'
import SearchInput, {
  createFilter
} from 'react-native-search-filter'
import { connect } from 'react-redux'

const KEYS_TO_FILTERS = ['name', 'drivingLicence', 'registrationDate']

class DriverSearch extends Component {
  constructor () {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  searchUpdated (term) {
    this.setState({ searchTerm: term })
  }

  render () {
    const filteredEmails = this.props.todos.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Search Driver</Text>

        <SearchInput
          onChangeText={(term) => { this.searchUpdated(term) }}
          style={styles.searchInput}
          placeholder='Type a message to search'
        />
        <View>
          {filteredEmails.map(data => {
            return (
              <TouchableOpacity onPress={() => alert("Name :" + data.name + "\nDriving Licence :" + data.drivingLicence + "\nRegistration Details :" + data.registrationDate)} key={data.id} style={styles.emailItem}>
                <View>
                  <Text>{data.name}</Text>
                  <Text style={styles.emailSubject}>{data.drivingLicence}</Text>
                  <Text style={styles.emailSubject}>{data.registrationDate}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b5ec',
    justifyContent: 'flex-start'
  },
  emailItem: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput: {
    padding: 20,
    borderColor: '#00090c',
    borderWidth: 2
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    margin: 20
  }
})
AppRegistry.registerComponent(DriverSearch, () => DriverSearch)

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(DriverSearch)
