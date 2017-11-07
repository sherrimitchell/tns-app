import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Alert, Image, Button } from 'react-native';

import { LinearGradient } from "expo";

export default class App extends Component {
  state =  {
    inputValue: "",
    inputValuee: "",
    errors:[]
  };

 handlePasswordChange = password => {
    //3) When the user types in, clear the errors
    this.setState({ password });
  };

  _handleEmailChange = email => {
    //3) When the user types in, clear the errors
    this.setState({ email });
  };

  _handleButtonPress = () => {
    //1) Fix this so it only displays the error if
    // the input is invalid
    if (!this.emailIsValid(this.state.email)) {
      this.setState({errors : ["This is not a valid email"]})
    }

    //2) Implement validation for the password
    // Does the password have 8 characters
    // Add an error to the list of errors
  };

  emailIsValid = email => {
    var substring = "@tnsatlanta.org";
    email.includes(substring);
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
          source={{ uri: 'http://tnsatlanta.org/wp-content/themes/tns-sixteen/images/logo.png' }}
          style={{ height: 200, width: 200 }}
        />

        <TextInput
          placeholder="Email"
          value={this.state.email}
          onChangeText={this._handleEmailChange}
          style={{ width: 200, height: 44, padding: 8 }}
        />


        <TextInput
          placeholder="Password"
          value={this.state.password}
          onChangeText={this._handlePasswordChange}
          style={{ width: 200, height: 44, padding: 8 }}
        />

        <Button
          onPress={this._handleButtonPress}
          title="Sign In"
        />

      <Text>
        // 4) Make this red!
        {this.state.errors}
      </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
