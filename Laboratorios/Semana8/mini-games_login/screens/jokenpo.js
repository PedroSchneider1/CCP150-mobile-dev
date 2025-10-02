import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Jokenpo({ route }) {
  const navigation = useNavigation();
  const { usuario } = route.params;

  const [opcoes, setOpcoes] = useState(['🪨 Pedra', '📄 Papel', '✂️ Tesoura']);
  const [escolha_bot, setEscolha_bot] = useState('');
  const [escolha_user, setEscolha_user] = useState('Nada');
  const [resultado, setResultado] = useState('');
  const [placar, setPlacar] = useState([0, 0, 0]);
  const [placarFinal, setPlacarFinal] = useState([0, 0, 0]); // [vitoriasUsuario, vitoriasBot, empates]
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  const sortearBot = useCallback(() => {
    const numero = Math.floor(Math.random() * 3);
    setEscolha_bot(opcoes[numero]);
  }, [opcoes]);

  useEffect(() => {
    sortearBot();
  }, [sortearBot]);

  async function salvarPontuacao(score, game, player) {
    try {
      const novaPontuacao = {
        id: Date.now().toString(),
        score,
        game,
        player,
      };

      const dadosExistentes = await AsyncStorage.getItem('pontuacoes');
      const pontuacoes = dadosExistentes ? JSON.parse(dadosExistentes) : [];

      pontuacoes.push(novaPontuacao);

      await AsyncStorage.setItem('pontuacoes', JSON.stringify(pontuacoes));
    } catch (error) {
      console.error('Erro ao salvar pontuação:', error);
    }
  }

  const guess = () => {
    if (jogoFinalizado || escolha_user === 'Nada') return;

    const user = escolha_user.split(' ')[1];
    const bot = escolha_bot.split(' ')[1];

    if (user === bot) {
      setResultado('🤝 Você empatou!');
      setPlacar((prev) => [prev[0], prev[1], prev[2] + 1]);
      setPlacarFinal((prev) => [prev[0], prev[1], prev[2] + 1]);
    } else if (
      (user === 'Tesoura' && bot === 'Papel') ||
      (user === 'Papel' && bot === 'Pedra') ||
      (user === 'Pedra' && bot === 'Tesoura')
    ) {
      setResultado('🎉 Você ganhou!');
      setPlacar((prev) => {
        const novoPlacar = [prev[0] + 1, prev[1], prev[2]];
        if (novoPlacar[0] >= 3) setJogoFinalizado(true);
        return novoPlacar;
      });
      setPlacarFinal((prev) => [prev[0] + 1, prev[1], prev[2]]);
    } else {
      setResultado('😢 Você perdeu!');
      setPlacar((prev) => {
        const novoPlacar = [prev[0], prev[1] + 1, prev[2]];
        if (novoPlacar[1] >= 3) setJogoFinalizado(true);
        return novoPlacar;
      });
      setPlacarFinal((prev) => [prev[0], prev[1] + 1, prev[2]]);
    }

    sortearBot();
  };

  const reiniciarJogo = () => {
    const scoreFinal = placarFinal[0] - placarFinal[1];
    salvarPontuacao(scoreFinal, 'Jokenpo', usuario);

    setPlacar([0, 0, 0]);
    setResultado('');
    setEscolha_user('Nada');
    setJogoFinalizado(false);
    sortearBot();
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.titulo}>
          🏆 Placar: {placar[0]} - {placar[1]}
        </Text>
        <Text style={styles.titulo}>🤝 Empates: {placar[2]}</Text>
        <Text style={styles.placarFinal}>
          🧮 Total — Usuário: {placarFinal[0]} | App: {placarFinal[1]} |
          Empates: {placarFinal[2]}
        </Text>
      </Card>

      <Card style={styles.card}>
        <Text style={styles.escolha}>Você escolheu: {escolha_user}</Text>
        <Text style={styles.resultado}>{resultado}</Text>

        {!jogoFinalizado && (
          <View style={styles.botoesContainer}>
            {opcoes.map((btn, index) => (
              <TouchableOpacity
                key={index}
                style={styles.botao}
                onPress={() => setEscolha_user(btn)}>
                <Text style={styles.botaoTexto}>{btn}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.botaoJogar} onPress={guess}>
              <Text style={styles.botaoTexto}>🎮 Jogar!</Text>
            </TouchableOpacity>
          </View>
        )}

        {jogoFinalizado && (
          <>
            <Text style={styles.mensagemFinal}>
              {placar[0] >= 3
                ? '🔥 TU É O MELHORZIN QUE TA TENDO!'
                : '🤖 Perdeu pra bot? Ai não paizão'}
            </Text>
            <TouchableOpacity
              style={styles.botaoReiniciar}
              onPress={reiniciarJogo}>
              <Text style={styles.botaoTexto}>🔄 Jogar Novamente</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botaoReiniciar}
              onPress={() => navigation.navigate('Score')}>
              <Text style={styles.botaoTexto}>Pontuação</Text>
            </TouchableOpacity>
          </>
        )}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 5,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0d47a1',
    marginBottom: 8,
  },
  escolha: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
    marginVertical: 4,
  },
  resultado: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#1e88e5',
  },
  botoesContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#64b5f6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 5,
    width: '80%',
  },
  botaoJogar: {
    backgroundColor: '#1976d2',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    width: '80%',
  },
  botaoReiniciar: {
    backgroundColor: '#43a047',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  mensagemFinal: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#d32f2f',
    marginTop: 20,
  },
  placarFinal: {
    fontSize: 18,
    textAlign: 'center',
    color: '#0d47a1',
    marginTop: 12,
    fontWeight: '600',
  },
});
