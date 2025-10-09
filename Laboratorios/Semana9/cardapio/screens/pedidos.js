import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

export default class PedidoScreen extends React.Component {
  render() {
    const { route } = this.props;
    const { item } = route.params;

    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>Preço: R$ {item.price.toFixed(2)}</Text>
        <Pressable
          style={styles.button}>
          <Text style={styles.buttonText}>Pedir</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: { width: 150, height: 150, borderRadius: 10, marginBottom: 20 },
  name: { fontSize: 22, fontWeight: 'bold' },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#444',
  },
  price: { fontSize: 20, fontWeight: '600', marginTop: 10, paddingBottom: 20 },
  button: {
    width: 100,
    backgroundColor: '#6200ee',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: { color: 'white', fontSize: 16 }
});
