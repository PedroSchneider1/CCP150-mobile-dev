import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';


export default function App() {
  const [opcoes, setOpcoes] = useState(["Pedra", "Papel", "Tesoura"]);
  const [escolha_bot, setEscolha_bot] = useState("");
  const [escolha_user, setEscolha_user] = useState("Nada");
  const [resultado, setResultado] = useState("");
  const [placar, setPlacar] = useState([0, 0, 0]);
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  useEffect(() => {
    sortearBot();
  }, []);

  const sortearBot = () => {
    const numero = Math.floor(Math.random() * 3);
    setEscolha_bot(opcoes[numero]);
  };

  const guess = () => {
    if (jogoFinalizado) return;

    if (escolha_user === escolha_bot) {
      setResultado("Você empatou!");
      setPlacar(prev => [prev[0], prev[1], prev[2] + 1]);
    } else if (
      (escolha_user === "Tesoura" && escolha_bot === "Papel") ||
      (escolha_user === "Papel" && escolha_bot === "Pedra") ||
      (escolha_user === "Pedra" && escolha_bot === "Tesoura")
    ) {
      setResultado("Você ganhou!");
      setPlacar(prev => {
        const novoPlacar = [prev[0] + 1, prev[1], prev[2]];
        if (novoPlacar[0] >= 3) setJogoFinalizado(true);
        return novoPlacar;
      });
    } else {
      setResultado("Você perdeu!");
      setPlacar(prev => {
        const novoPlacar = [prev[0], prev[1] + 1, prev[2]];
        if (novoPlacar[1] >= 3) setJogoFinalizado(true);
        return novoPlacar;
      });
    }

    sortearBot();
  };

  const reiniciarJogo = () => {
    setPlacar([0, 0]);
    setResultado("");
    setEscolha_user("Nada");
    setJogoFinalizado(false);
    sortearBot();
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.titulo}>PLACAR {placar[0]} - {placar[1]}</Text>
        <Text style={styles.titulo}>EMPATES {placar[2]}</Text>
      </Card>
      <Card style={styles.card}>
        <Text style={styles.escolha}>Você escolheu: {escolha_user}</Text>
        <Text style={styles.resultado}>{resultado}</Text>

        {!jogoFinalizado && opcoes.map((btn, index) => (
          <Button
            style={styles.botao}
            key={index}
            title={btn}
            onPress={() => setEscolha_user(btn)}
          />
        ))}

        {!jogoFinalizado && (
          <Button
            style={styles.botao}
            title="Jogar!"
            onPress={guess}
          />
        )}

        {jogoFinalizado && placar[0] >= 3 && (
          <Text style={styles.mensagemFinal}>TU É O MELHORZIN QUE TA TENDO!</Text>
        )}
        {jogoFinalizado && placar[1] >= 3 && (
          <Text style={styles.mensagemFinal}>Perdeu pra bot? Ai nao paizão</Text>
        )}

        {jogoFinalizado && (
          <Button
            style={styles.botao}
            title="Jogar Novamente"
            onPress={reiniciarJogo}
          />
        )}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },

  card: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 4,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },

  placar: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4caf50',
    marginBottom: 10,
  },

  escolha: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 5,
    color: '#555',
  },

  resultado: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#2196f3',
  },

  botao: {
    marginVertical: 5,
  },

  mensagemFinal: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#e91e63',
    marginTop: 20,
  }
});
