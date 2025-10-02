import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Guess({ route }) {
  const navigation = useNavigation();

  const { usuario } = route.params;
  const [numSecreto, setNumSecreto] = useState(0);
  const [numUser, setNumUser] = useState('');
  const [acerto, setAcerto] = useState(null);
  const [score, setScore] = useState(100);

  useEffect(() => {
    const numero = Math.floor(Math.random() * 99) + 1;
    setNumSecreto(numero);
  }, []);

  const feedback = {
    0: {
      mensagem: 'Parabéns! Você acertou!',
      cor: '#4CAF50',
    },
    1: {
      mensagem: 'Errou! Número muito grande.',
      cor: '#F44336',
    },
    2: {
      mensagem: 'Errou! Número muito baixo.',
      cor: '#FF9800',
    },
  };

  async function salvarPontuacao(score, game, player) {
    try {
      const novaPontuacao = {
        id: Date.now().toString(),
        score,
        game,
        player,
      };

      const dadosExistentes = await AsyncStorage.getItem('pontuacoes');
      const pontuacoes = dadosExistentes ? JSON.parse(dadosExistentes) : [];

      pontuacoes.push(novaPontuacao);

      await AsyncStorage.setItem('pontuacoes', JSON.stringify(pontuacoes));
    } catch (error) {
      console.error('Erro ao salvar pontuação:', error);
    }
  }

  function handleAdivinhar() {
    const tentativa = parseInt(numUser);
    if (isNaN(tentativa)) {
      Alert.alert('Por favor, insira um número válido.');
      return;
    }

    setScore((prev) => Math.max(prev - 1, 0)); // evita pontuação negativa

    if (tentativa === numSecreto) {
      setAcerto(0);
      salvarPontuacao(score, 'Jogo da Adivinhação', usuario);
    } else if (tentativa > numSecreto) {
      setAcerto(1);
    } else {
      setAcerto(2);
    }
  }

  function restartGame() {
    const novoNumero = Math.floor(Math.random() * 99) + 1;
    setNumSecreto(novoNumero);
    setNumUser('');
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
        <View
          style={[
            styles.feedbackBox,
            { backgroundColor: feedback[acerto].cor },
          ]}>
          <Text style={styles.feedbackText}>{feedback[acerto].mensagem}</Text>
        </View>
      )}
      {acerto === 0 && (
        <View style={styles.actions}>
          <TouchableOpacity style={styles.button} onPress={restartGame}>
            <Text style={styles.buttonText}>🔄 Jogar novamente</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.scoreButton]}
            onPress={() => navigation.navigate('Score')}>
            <Text style={styles.buttonText}>📊 Ver Pontuação</Text>
          </TouchableOpacity>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
  },
  feedbackBox: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
  },
  feedbackText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  actions: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    gap: 12,
  },

  button: {
    backgroundColor: '#0078d7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    elevation: 2,
  },

  scoreButton: {
    backgroundColor: '#F8AE75',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
