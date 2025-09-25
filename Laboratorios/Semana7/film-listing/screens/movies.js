import React from 'react';
import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const filmes = [
  {
    titulo: 'Um Sonho de Liberdade',
    descricao:
      'Dois homens presos se unem por anos, encontrando redenção através de atos de decência.',
  },
  {
    titulo: '3 Idiotas',
    descricao:
      'Dois amigos procuram seu colega perdido, relembrando os dias de faculdade.',
  },
  {
    titulo: 'Sempre ao Seu Lado',
    descricao: 'A história de lealdade entre um cão e seu dono.',
  },
  {
    titulo: 'Incêndios',
    descricao:
      'Gêmeos viajam ao Oriente Médio para descobrir sua história familiar.',
  },
  {
    titulo: 'Na Natureza Selvagem',
    descricao: 'Christopher McCandless abandona tudo para viver no Alasca.',
  },
  {
    titulo: 'Titanic',
    descricao:
      'Uma jovem aristocrata se apaixona por um artista pobre a bordo do Titanic.',
  },
  {
    titulo: 'Náufrago',
    descricao:
      'Um executivo da FedEx sobrevive em uma ilha deserta após um acidente aéreo.',
  },
  {
    titulo: 'À Procura da Felicidade',
    descricao: 'Um pai luta para dar uma vida melhor ao seu filho.',
  },
  {
    titulo: 'À Espera de um Milagre',
    descricao:
      'Guardas do corredor da morte são tocados por um prisioneiro com um dom misterioso.',
  },
  {
    titulo: 'O Jogo da Imitação',
    descricao:
      'Alan Turing tenta decifrar códigos nazistas durante a Segunda Guerra Mundial.',
  },
  {
    titulo: 'A Origem',
    descricao:
      'Um ladrão especializado em extrair segredos dos sonhos precisa implantar uma ideia na mente de um alvo.',
  },
  {
    titulo: 'Clube da Luta',
    descricao:
      'Um homem insatisfeito com sua vida corporativa forma um clube secreto de luta com um vendedor de sabonetes excêntrico.',
  },
  {
    titulo: 'O Poderoso Chefão',
    descricao:
      'A saga da família mafiosa Corleone e sua luta pelo poder, lealdade e sobrevivência no submundo do crime.',
  },
  {
    titulo: 'Forrest Gump',
    descricao:
      'Um homem com QI abaixo da média vive momentos históricos e inspira todos ao seu redor com sua bondade.',
  },
  {
    titulo: 'O Grande Hotel Budapeste',
    descricao:
      'Um concierge excêntrico e seu jovem protegido se envolvem em uma trama de assassinato e herança na Europa fictícia.',
  },
  {
    titulo: 'Corra!',
    descricao:
      'Um jovem negro visita a família de sua namorada branca e descobre segredos perturbadores por trás da fachada acolhedora.',
  },
  {
    titulo: 'O Labirinto do Fauno',
    descricao:
      'Durante a guerra civil espanhola, uma menina encontra um mundo mágico sombrio enquanto lida com a brutalidade da realidade.',
  },
  {
    titulo: 'A Rede Social',
    descricao:
      'A história da criação do Facebook e os conflitos que surgiram entre os fundadores e investidores.',
  },
  {
    titulo: 'Whiplash: Em Busca da Perfeição',
    descricao:
      'Um jovem baterista enfrenta os métodos abusivos de um maestro obsessivo em busca da excelência musical.',
  },
  {
    titulo: 'Her',
    descricao:
      'Um homem solitário se apaixona por um sistema operacional com inteligência artificial avançada e sensível.',
  },
];

export default function Listing() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes</Text>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.titulo}
        renderItem={({ item }) => (
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('Detalhes', { filme: item })}>
            <Text style={styles.buttonText}>{item.titulo}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 20 },
  button: {
    backgroundColor: '#6200ee',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonText: { color: 'white', fontSize: 16 },
});
