import { View, Button, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  const { usuario } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo(a), {usuario}!</Text>
      <View style={styles.buttonWrapper}>
        <Button
          title="🎮 Clique aqui para jogar!"
          onPress={() => navigation.navigate('Jogos', { usuario: usuario })}
          color="#4CAF50"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  welcome: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '80%',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
});