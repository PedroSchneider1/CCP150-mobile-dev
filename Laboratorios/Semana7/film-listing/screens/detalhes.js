import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalhes({ route }) {
  const { filme } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{filme.titulo}</Text>
      <Text style={styles.description}>{filme.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16 },
});
