import React from 'react';
import {
  Button,
  StyleSheet,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';

export default class ConversorTemp extends React.Component {

  constructor(props) {
    super(props);
    this.state = { temp: '', info: '-', resultadoC: 0.0, resultadoK: 0.0};
    this.converterTemp = this.converterTemp.bind(this);
  }

  converterTemp() {
    let d = this.state
    let celcius = (this.state.temp - 32) / 1.8
    let kelvin = ((this.state.temp - 32) / 1.8) + 273.15
    d.resultadoC = celcius
    d.resultadoK = kelvin
    if (d.resultadoC < 35.0) {
      d.info = 'Hipotermia';
    } else if (d.resultadoC < 37.9) {
      d.info = 'Normal';
    } else if (d.resultadoC >= 37.9) {
      d.info = 'Estado Febril';
    }
    this.setState(d);
  }

  clear = () => {
    this.setState({
      temp: '',
      info: '-',
      resultadoC: 0.0,
      resultadoK: 0.0,
    });
  };


  render() {
    return (
      <View style={styles.viewContainer}>
        <StatusBar />
        <Text style={styles.header}>Conversor de Temperatura Corporal</Text>
        <Separator />
        <Text style={styles.text1}>Digite sua temperatura em °F:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(temp) => this.setState({ temp })}
          value={this.state.temp}
          placeholder="Exemplo: 45.5 °F"
          keyboardType={'numeric'}
        />
        <View style = {styles.buttonBox}>
          <Button style={styles.button}
            onPress={this.converterTemp}
            title="Calcular"
            color="gray"
            accessibilityLabel="Clique aqui para converter a temperatura em C° e K°"
          />
          <Separator />
          <Button style={styles.button}
            onPress={this.clear}
            title="Limpar"
            color="gray"
            accessibilityLabel="Clique aqui limpar os valores"
          />
        </View>
        <Text style={styles.input}>
        Temperatura em C°: {this.state.resultadoC.toFixed(2)} {"\n"}
        Temperatura em K°: {this.state.resultadoK.toFixed(2)}
        </Text>
        <Separator />
        <Text style={styles.input}>
        Condição térmica do usuário: {"\n"}
        {this.state.info}
        </Text>
      </View>

    )
  }
}

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({

  viewContainer: {
    flex: 1, 
    backgroundColor: 'white',
    padding: 10,
    margin: 15,
    borderWidth: 3,
    borderColor: 'blue',
    borderRadius: 5,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 2,
    alignSelf: 'center',
    color: 'blue' ,
    textAlign: 'center'
  },

  separator: {
    padding: 5,
    margin: 5,
  },

  text1: {
    fontSize: 18,
  },
  textInput: {
    height:35,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 5,
    marginTop: 15,
    fontWeight: 'italic',
  },

  buttonBox:{
    padding: 20,
  },

  button: {
    margin: 5,
    padding: 10,

  },
  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 10, 
    fontSize: 16,
    textAlign:'center',
    justifyContent: 'center',
    flex: 1,
  }

});
