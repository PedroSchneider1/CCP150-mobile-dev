import * as React from 'react';
import { TextInput, Text, View, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SalvarItens from './components/SalvarItens'
import BuscarItens from './components/BuscarItens'
import ListarItens from './components/ListarItens'


const Navegacao = createBottomTabNavigator();

class App extends React.Component {

  render() {
    return(
    <NavigationContainer>
      <Navegacao.Navigator>
        <Navegacao.Screen name="Salvar" component={SalvarItens}/>
        <Navegacao.Screen name="Buscar" component={BuscarItens}/>
        <Navegacao.Screen name="Listar" component={ListarItens}/>
      </Navegacao.Navigator>
    </NavigationContainer>
    )
  }
}

export default App;