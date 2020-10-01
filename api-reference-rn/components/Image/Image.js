import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    marginHorizontal: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginVertical:5,

  },
  logo: {
    width: 66,
    height: 58,
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  stretch: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
  },
  contain: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        // source={require('@expo/snack-static/react-native-logo.png')}
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
      />
      <Separator />
      <Image
        style={styles.stretch}
        // Ao passar uma URI, considearar um valor de objeto, ou seja dentro de {}.
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
      />
      < Separator />
      <Image
        style={styles.contain}
        // Ao passar uma URI, considearar um valor de objeto, ou seja dentro de {}.
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}
      />
      < Separator />
      <Image
        style={styles.logo}
        source={{
          uri:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        
        }}
      />
    </View>
  );
}

export default DisplayAnImage;