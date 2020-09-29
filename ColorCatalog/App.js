import React from 'react'
import {
  Alert,
  Button,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar barStyle = "dark-content" hidden = {false}/>
        <Text>Sierra</Text>
        <Text>Tanner</Text>
        <Text>Travis</Text>
      </View>
      
    )
  }
}

export default App;