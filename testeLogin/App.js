import React from "react";
import { Text, View } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Home';
import Sobre from './src/Sobre';
import Views from './src/Views';
import Login from './src/Login';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ title: 'Tela Login' }} />
          <Stack.Screen name="Home" component={Home} options={{ title: 'Início', headerLeft: null }} />
          <Stack.Screen name="Views" component={Views} />
          <Stack.Screen name="Sobre" component={Sobre} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}