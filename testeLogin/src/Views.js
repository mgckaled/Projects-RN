import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Button, FlatList, SafeAreaView, View} from 'react-native';

//import { WebView } from 'react-native-webview';

export default function Views() {
  return(
  <SafeAreaView style={styles.container}>
    <FlatList
      data={campi}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    </SafeAreaView>
  );
}

const campi = [
  {
    id: "pcs",
    title: "Poços de Caldas",
    url: 'https'
  },
  {
    id: "pas",
    title: "Passos",
    url: 'https'
  },
  {
    id: "poa",
    title: "Pouso Alegre",
    url: 'https'
  },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Item texto={item.title} />
    <Item texto={item.url} />
  </View>
  );

const Item = ({ texto }) => (
    <Text style={styles.title}>{texto}</Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#61dafb",
    padding: 20,
    marginVertical: 8
  },
  title: {
    fontSize: 24
  }
});