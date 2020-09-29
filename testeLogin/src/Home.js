import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Button} from 'react-native';

export default function Home({ navigation }) {
  return(
	<View style={styles.container}>
		
    <TouchableOpacity
      style={styles.title}
      onPress={() => navigation.navigate('Views')}
    >
      <Text>Visualização</Text> 
    </TouchableOpacity>

		<TouchableOpacity
      style={styles.title}
      title="Página Sobre"
      onPress={() => navigation.navigate('Sobre')}
    >
      <Text>Sobre</Text> 
    </TouchableOpacity>
	</View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
