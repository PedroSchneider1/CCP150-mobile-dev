import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert
} from 'react-native';

export default function App() {
  const [numSecreto, setNumSecreto] = useState(0);
  const [numUser, setNumUser] = useState('');
  const [acerto, setAcerto] = useState(null);

  useEffect(() => {
    const numero = Math.floor(Math.random() * 99) + 1;
    setNumSecreto(numero);
  }, []);

  const feedback = {
    0: {
      mensagem: 'Parabéns! Você acertou!',
      cor: '#4CAF50'
    },
    1: {
      mensagem: 'Errou! Número muito grande.',
      cor: '#F44336'
    },
    2: {
      mensagem: 'Errou! Número muito baixo.',
      cor: '#FF9800'
    }
  };

  function handleAdivinhar() {
    const tentativa = parseInt(numUser);
    if (isNaN(tentativa)) {
      Alert.alert('Por favor, insira um número válido.');
      return;
    }

    if (tentativa === numSecreto) {
      setAcerto(0);
    } else if (tentativa > numSecreto) {
      setAcerto(1);
    } else {
      setAcerto(2);
    }
  }

  function restartGame(){
    const novoNumero = Math.floor(Math.random() * 99) + 1;
    setNumSecreto(novoNumero);
    setNumUser("");
    setAcerto(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tente adivinhar (1 a 99)!</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numUser}
        onChangeText={setNumUser}
        placeholder="Digite um número"
      />

      <Button title="Adivinhar" onPress={handleAdivinhar} color="#0078d7" />

      {acerto !== null && (
        <View style={[styles.feedbackBox, { backgroundColor: feedback[acerto].cor }]}>
          <Text style={styles.feedbackText}>{feedback[acerto].mensagem}</Text>
        </View>
      )}
      {acerto === 0 && (
        <View style={styles.feedbackBox}>
            <Button title="🔄 Jogar novamente" onPress={restartGame} color="#0078d7" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center'
  },
  input: {
    width: '80%',
    padding: 10,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15
  },
  feedbackBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8
  },
  feedbackText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
