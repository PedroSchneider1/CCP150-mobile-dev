import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimerScreen from '../screens/Timer';
import ClockScreen from '../screens/Clock';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Timer">
      <Stack.Screen name="Timer" component={TimerScreen} />
      <Stack.Screen name="Relógio" component={ClockScreen} />
    </Stack.Navigator>
  );
}
