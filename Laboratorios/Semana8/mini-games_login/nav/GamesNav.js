import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GuessScreen from '../screens/guess';
import JokenpoScreen from '../screens/jokenpo';

const Tab = createBottomTabNavigator();

export default function BottomNav( {usuario} ) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 120,
          paddingTop: 5
        },
      }}>
      <Tab.Screen
        name="Guess"
        component={GuessScreen}
        options={{
          tabBarLabel: 'Adivinhação',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="puzzle" color={color} size={size} />
          ),
          headerShown: false,
        }}
        initialParams={{ usuario }}
      />
      <Tab.Screen
        name="Jokenpo"
        component={JokenpoScreen}
        options={{
          tabBarLabel: 'Jokenpo',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="scissors-cutting"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
        initialParams={{ usuario }}
      />
    </Tab.Navigator>
  );
}
