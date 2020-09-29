import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  StatusBar,
} from 'react-native';


import SearchInput from './components/SearchInput'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
  }

  componentDidMount() {
    console.log('Component has mounted!');
  }

  handleUpdateLocation = city => {
    this.setState({
      location: city,
    });
  };

  render(){

    const { location } = this.state;

    return (
      
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle = "light-content"/>
        <ImageBackground
          source={require("./utils/Rain.jpg")}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >

          <View style={styles.detailsContainer}>
          <Text style={[styles.largeText, styles.textStyle]}> {location} </Text>
          <Text style={[styles.smallText, styles.textStyle]}> Light Cloud </Text>
          <Text style={[styles.largeText, styles.textStyle]}> 24° </Text>

          <SearchInput 
            placeholder = "Procure por qualquer cidade"
            onSubmit={this.handleUpdateLocation}
          />

          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },

  largeText: { fontSize: 44 },
  smallText: { fontSize: 18 },
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  }

});