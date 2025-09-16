import { useState, useEffect } from 'react';
import { StyleSheet, Pressable, Text, View, Image } from 'react-native';

export default function TimerScreen({ navigation }) {
  const [isOn, setIsOn] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (isOn) {
      interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOn]);

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⏱ Timer</Text>
      <Text style={styles.time}>{formatTime(count)}</Text>

      <Image
        source={{ uri: 'https://img.icons8.com/fluency-systems-filled/96/timer.png' }}
        style={styles.image}
      />

      {!isOn ? (
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && { opacity: 0.6 }
          ]}
          onPress={() => setIsOn(true)}>
          <Text style={styles.buttonText}>Iniciar</Text>
        </Pressable>
      ) : (
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && { opacity: 0.6 }
          ]}
          onPress={() => setIsOn(false)}>
          <Text style={styles.buttonText}>Pausar</Text>
        </Pressable>
      )}

      <Pressable
        style={({ pressed }) => [
            [styles.button, styles.resetButton],
            pressed && { opacity: 0.6 }
          ]}
        onPress={() => setCount(0)}>
        <Text style={styles.buttonText}>Zerar</Text>
      </Pressable>

      <Pressable
        style={({ pressed }) => [styles.navButton, pressed && { opacity: 0.6 }]}
        onPress={() => navigation.navigate('Relógio')}>
        <Text style={styles.buttonText}>Ir para relógio</Text>
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
  image: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  navButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
  },
  resetButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});