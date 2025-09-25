import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import ListingScreen from '../screens/movies';
import Detalhes from '../screens/detalhes';

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
        name="Listing"
        component={ListingScreen}
        options={{ title: 'Filmes' }}
      />

      <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  );
}
