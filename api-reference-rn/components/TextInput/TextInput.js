import React, { Component } from 'react';
import { View, TextInput } from 'react-native';


const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below// quantidade máxima de palavras
    />
  );
}

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');
  
  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderWidth: 1,
        margin: 10,
        padding: 10,
      }}>
      <UselessTextInput
        editable maxLength={40}
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
}

export default UselessTextInputMultiline;
