import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import JokenpoScreen from '../screens/jokenpo';
import GuessScreen from '../screens/guess';

const Tab = createMaterialTopTabNavigator();

export default function StackNavigator() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Jokenpo" component={JokenpoScreen} 
          options={{
            tabBarLabel: "Jokenpo",
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="hand-wave" color={color} size={size}/>)
          }}
        />
        <Tab.Screen name="Guess" component={GuessScreen}
          options={{
            tabBarLabel: "Jogo da Adivinhação",
            tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="guy-fawkes-mask" color={color} size={size}/>)
          }}
        />
      </Tab.Navigator>
  );
}
