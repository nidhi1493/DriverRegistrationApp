import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {addDriver} from '../actions'
import DatePicker from 'react-native-datepicker'
import { withNavigation } from 'react-navigation';

class AddDriver extends Component {

    state = {
        name: "",
        drivingLicence: "",
        date: ""
    };

    success = () => {
        alert ("Dear " + this.state.name + " you are successfully registered !!");
        this.props.navigation.navigate('Homes')
    }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.titleText}> Driver Registration Page</Text>

                <View style={styles.datePickerContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Full name"
                               underlineColorAndroid='transparent'
                               onChangeText={(name) => this.setState({name})}
                               value={this.state.text}/>
                </View>

                <View style={styles.datePickerContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Enter driving Licence"
                               underlineColorAndroid='transparent'
                               onChangeText={(drivingLicence) => this.setState({drivingLicence})}
                               value={this.state.text}/>

                </View>
                <View style={styles.datePickerContainer}>
                <DatePicker
                    style={{width: 250}}
                    date={this.state.date}
                    mode="date"
                    placeholder="Registration date"
                    format="YYYY-MM-DD"
                    minDate="1976-05-01"
                    maxDate="2018-12-15"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                </View>
                <TouchableOpacity style={[styles.buttonContainer, styles.signupButton]}
                                  onPress={() => this.props.addDriver(this.state) && this.success() }>
                    <Text style={styles.signUpText}>Register</Text>
                </TouchableOpacity>

            </View>
        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b5ec',
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
        alignItems: 'center',
        color: 'black'

    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
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
        borderRadius: 30,
    },
    signupButton: {
        backgroundColor: "#FF4DFF",
    },
    signUpText: {
        color: 'black',
    },

    datePickerContainer: {
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        color: 'black',
        marginLeft: 16
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20
      }
});

const mapDispatchToProps = (dispatch) => {
    return {
        addDriver: (text) => 
            dispatch(addDriver(text))
  }
}

export default withNavigation (connect(null,mapDispatchToProps)(AddDriver));

