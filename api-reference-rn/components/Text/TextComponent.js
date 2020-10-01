// é necessário importar porque a dependência react é necessário
// para rodar o aplicativo
import React, { Component, useState } from 'react'; 
// utilizado para importar os componentes que serão utilizados no projeto
import {StyleSheet, Text, View} from 'react-native';


// Criando uma função arrow para exibir um log no console.
const onPressTitle = () => {
  console.log("Título Pressionado");
}

const TextInANest = () => {

  // The setState function is used to update the state. 
  // It accepts a new state value and enqueues a re-render of the component.
  const titleText = useState("React Native")
  const bodyText = useState("Corpo de Texto")

  return (
    // componente view é utilizado para encapsular ou emvelopar os demais componentes.
    // Todos os textos precisam estar contidos dentro do componente <Texto></Texto> para serem renderizados.
    <View style={styles.container}>
      <View style={styles.header}>
        <Text onPress={onPressTitle}>{titleText}</Text>
      </View>
      <View style={styles.body}>
        <Text>{bodyText}</Text>
      </View>
    </View> 
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 30,
  },
  header: {
    marginTop: 30,
    borderBottomWidth: 1,
  },
  body: {
    flex: 1,
    marginVertical: 30,
    alignSelf:'center',
    alignContent: 'center',
    alignItems: 'center'

  }
})

export default TextInANest;
