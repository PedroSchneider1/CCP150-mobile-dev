import { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function ClockScreen({ navigation }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🕒 Relógio</Text>
      <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.6 }]}
        onPress={() => navigation.navigate('Timer')}>
        <Text style={styles.buttonText}>Ir para Timer</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#444',
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});