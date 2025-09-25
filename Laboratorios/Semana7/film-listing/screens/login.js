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
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const senhaSalva = await AsyncStorage.getItem(usuario);
      if (!senhaSalva) {
        alert('Usuário não encontrado');
        return;
      }

      if (senhaSalva === senha) {
        alert('Login bem-sucedido');
        navigation.navigate('Listing');
      } else {
        alert('Senha incorreta');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao tentar logar');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
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
    backgroundColor: '#6200ee',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
