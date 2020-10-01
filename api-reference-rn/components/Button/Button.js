import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';


// Definição de um componente a ser renderizado.
const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (

  // Renderiza os componentes dentro de uma área segura
  // Aplica um padding automático quando há sobreposição de elementos na Screen
  // Todos os componentes e elemntos estão contidos nesta tag.
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        The title and onPress handler are required. It is recommended to set accessibilityLabel to help make your app usable by everyone.
      </Text>
      <Button
        title="Press me"
        onPress={() =>  Alert.alert('Simple Button pressed')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        Adjust the color in a way that looks standard on each platform. On  iOS, the color prop controls the color of the text. On Android, the color adjusts the background color of the button.
      </Text>
      <Button
        title="Press me" // Todo texto e convertido para Letras Maiúsculas
        color="#f194ff" // anterando a cor do botão para rosa.
        onPress={() => Alert.alert('Button with adjusted color pressed')}
        accessibilityLabel = "Text to display for blindness accessibility features."
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        All interaction for the component are disabled.
      </Text>
      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
    <View>
      <Text style={styles.title}>
        This layout strategy lets the title define the width of the button.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20,
    fontFamily: 'Open Sans',
  },
  fixToText: {
    flexDirection: 'row', // Botões na mesma linha
    justifyContent: 'space-between', // distribuidos nos cantos da tela
  },
  separator: {
    marginVertical: 8, // margem de 
    borderBottomColor: '#737373',

    // Parâmetro de componente que define uma linha com espessura de uma "cabelo"
    borderBottomWidth: StyleSheet.hairlineWidth, 
  }
});

export default App;