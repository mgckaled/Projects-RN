import React from 'react';
import { Alert, Text, View, TextInput, StyleSheet, Button, ActivityIndicator} 
from 'react-native';

import firebase from '@firebase/app';
import '@firebase/auth'

import Home from './Home';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoading: false,
      message: ''
    }
  }
  
  componentDidMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCuKaHA5LIyn-wsYulKNbV6hABBXEbP6mQ",
      authDomain: "testelogin-56059.firebaseapp.com",
      databaseURL: "https://testelogin-56059.firebaseio.com",
      projectId: "testelogin-56059",
      storageBucket: "testelogin-56059.appspot.com",
      messagingSenderId: "465012727163",
      appId: "1:465012727163:web:6f62a9cec8d1bea05eb1de"
    };
    try { 
      firebase.initializeApp(firebaseConfig)
    } catch (err) {
      if (!/already exists/.test(err.message)) {
        console.error("erro")
      }
    }
  }

  renderButton() {
    if (this.state.isLoading)
      return <ActivityIndicator />;
    return (
      <Button 
        style ={styles.button}
        title="Entrar" 
        onPress={() => this.login()}
      />
    );
  }

  renderMessage() {
    const { message } = this.state;
    if (!message)
      return null;
    return (
      <View>
        <Text>
        {message}
        </Text>
      </View>
    );
  }

  mudaTextInput(campo, valor) {
    //const newState = {};
    //newState[campo] = valor;
    //this.setState(newState);
    this.setState({[campo]: valor});
  }


  login() {
    this.setState({ isLoading: true });
    const {email, password} = this.state;

    const loginSucesso = user => {
      this.props.navigation.navigate('Home');
    }

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(loginSucesso)
    .catch(error => {
      if (error.code == 'auth/user-not-found') {
        Alert.alert(
          'Usuário não encontrado',
          'Criar novo usuário?',
          [{
            text: 'Não',
          }, {
            text: 'Sim',
            onPress: () => {
              firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(loginSucesso)
                .catch(error => {
                  this.setState({
                    message: this.erroLoginMessage(error.code)
                  })
                })
            }
          }],
          { cancelable: false}
        )
      } else {
        Alert.alert(
          'Erro na auntenticação',
          this.erroLoginMessage(error.code)
        )
      }
    })
    .then(() => this.setState({ isLoading: false}));
  }

  erroLoginMessage(errorCode) {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Senha incorreta'
      case 'auth/user-not-found':
        return 'Usuário não encontrado'
      case 'auth/invalid-email':
        return 'E-mail incorreto'
      default :
        return 'Erro não documentado, contate o administrador: Marcelo'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} 
          placeholder="exemplo@email.com"
          value={this.state.email}
          onChangeText={value => this.mudaTextInput('email', value)}
        />
        <TextInput style={styles.textInput} 
          placeholder="Digite sua senha" secureTextEntry
          value={this.state.password}
          onChangeText={value => this.mudaTextInput('password', value)}
        />
        { this.renderButton() }
        { this.renderMessage() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
  },
  textInput: {
    padding: 10,
    backgroundColor: 'white',
    marginTop: 5,
    marginBottom: 5,
    elevation: 2,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  }
});