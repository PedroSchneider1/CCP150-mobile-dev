import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const menuItems = [
  {
    id: "1",
    name: "Pizza de Mussarela",
    description: "Molho de tomate, cebola e mussarela.",
    price: 39.9,
    image: require("../assets/pizza.png")
  },
  {
    id: "2",
    name: "Suco 1L",
    description: "Suco de fruta natural.",
    price: 9.9,
    image: require("../assets/sucoLaranja.png")
  },
  {
    id: "3",
    name: "Hambúrguer de Siri",
    description: "O melhor da Fenda do Biquíni.",
    price: 999.99,
    image: require("../assets/burgSiri.jpg")
  },
  {
    id: "4",
    name: "Pizza do Siri Cascudo",
    description: "Receita secreta feita com ingredientes secretos.",
    price: 499.99,
    image: require("../assets/pizzaSiri.png")
  },
  {
    id: "5",
    name: "Cerveja 330ml",
    description: "Não pode faltar ne.",
    price: 12.32,
    image: require("../assets/cerveja.png")
  }
  
];

export default class MenuScreen extends React.Component {
  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => this.props.navigation.navigate("Pedir", { item })}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );

  render(){
    return (
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
  },
  image: { width: 100, height: 100 },
  info: { flex: 1, padding: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  description: { fontSize: 14, color: "#555" },
  price: { fontSize: 16, fontWeight: "600", marginTop: 5 },
});
