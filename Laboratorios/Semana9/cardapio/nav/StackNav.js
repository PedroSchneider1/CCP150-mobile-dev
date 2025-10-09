import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import MenuScreen from '../screens/menu';
import OrderScreen from '../screens/pedidos'

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
        name="Cardápio"
        component={MenuScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Pedir"
        component={OrderScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
