import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import GamesScreenWrapper from './GamesScreenWrapper';
import WelcomeScreen from '../screens/welcome';
import ScoreScreen from '../screens/score'

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={BottomNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bem-vindo!"
        component={WelcomeScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Jogos"
        component={GamesScreenWrapper}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Score"
        component={ScoreScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
