import React, { useState } from 'react';
import {
  TextInput,
  Text,
  View,
  Pressable,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Register() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  async function gravar() {
    try {
      await AsyncStorage.setItem(user, password);
      alert('Salvo com sucesso!');
    } catch (erro) {
      alert('Erro!');
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        placeholder="Usuário"
        value={user}
        onChangeText={setUser}
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={gravar}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    backgroundColor: '#EA905C',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});
