import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ScoreScreen() {
  const [pontuacoes, setPontuacoes] = useState([]);

  useEffect(() => {
    async function carregarPontuacoes() {
      const dados = await AsyncStorage.getItem('pontuacoes');
      if (dados) {
        const lista = JSON.parse(dados);
        const ordenadas = lista.sort((a, b) => b.score - a.score);
        setPontuacoes(ordenadas);
      }
    }

    carregarPontuacoes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏆 Ranking de Pontuações</Text>
      <FlatList
        data={pontuacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <Text style={styles.rank}>#{index + 1}</Text>
            <Text style={styles.player}>👤 {item.player}</Text>
            <Text style={styles.game}>🎮 {item.game}</Text>
            <Text style={styles.score}>⭐ {item.score} pontos</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0078d7',
    marginBottom: 6,
  },
  player: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  game: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
  },
  score: {
    fontSize: 16,
    color: '#2e7d32',
    marginTop: 6,
    fontWeight: 'bold',
  },
});