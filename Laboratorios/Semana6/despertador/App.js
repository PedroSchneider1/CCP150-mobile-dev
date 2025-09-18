import React from 'react';
import { StyleSheet, Pressable, View, Text, TextInput, Image } from 'react-native';
import {Audio} from 'expo-av';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hora: new Date(),
      despertadorHora: undefined,
      despertadorMinuto: undefined
    }
    this.som = new Audio.Sound();
    this.som.loadAsync(require('./audio.mp3'));
    this.som.setPositionAsync(0);
    this.tocando = false;
  }

  atualizarHora(){
    this.setState({hora: new Date()})
  }

  componentDidMount(){
    setInterval(()=>{this.atualizarHora(), this.tocarDespertador()}, 1000);
  }

  tocar(){
    this.som.playAsync();
    this.tocando = true;
  }

  pausar(){
    this.som.stopAsync();
    this.tocando = false;
  }

  tocarDespertador(){
    if(this.state.despertadorHora == this.state.hora.getHours() &&
      this.state.despertadorMinuto == this.state.hora.getMinutes() ){
      this.tocar();
    } else{
      this.pausar();
    }
  }

  // <Pressable
  //   style={({ pressed }) => [
  //       [styles.button],
  //       pressed && { opacity: 0.6 }
  //     ]}
  //   onPress={() => this.salvarDespertador()}>
  //   <Text style={styles.buttonText}>Salvar despertador</Text>
  // </Pressable>

  render() {
    return (
      <View style={styles.container}>
        {this.tocando ? (
          <View>
            <Pressable
              style={({ pressed }) => [
                  [styles.button],
                  pressed && { opacity: 0.6 }
                ]}
              onPress={() => {this.pausar(),
                              this.setState({despertadorHora: 0});
                              this.setState({despertadorMinuto: 0});}}>
              <Text style={styles.buttonText}>Pausar</Text>
            </Pressable>
            <Image
              source={require("./despertador.gif")}
              style={styles.imagem}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.title}>Hora</Text>
            <TextInput
              placeholder="Digite a hora..."
              style={styles.input}
              keyboardType='numeric'
              onChangeText={(h)=>this.setState({despertadorHora: parseInt(h)})}></TextInput>
            
            <Text style={styles.title}>Minuto</Text>
            <TextInput
              placeholder="Digite o minuto..."
              style={styles.input}
              keyboardType='numeric'
              onChangeText={(m)=>this.setState({despertadorMinuto: parseInt(m)})}></TextInput>
          </View>
        )}
        <Text style={styles.time}>{this.state.hora.toLocaleTimeString('pt-br')}</Text>  
        <Text style={styles.time}>{this.state.hora.toLocaleDateString('pt-br')}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    padding: 5,
  },
  title: {
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 10,
    color: '#333',
  },
  imagem: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
    marginTop: 25,
    color: '#444',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

export default App;