import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import ListingScreen from '../screens/movies';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 120,
          paddingTop: 5
        },
      }}>
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="login" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          tabBarLabel: 'Cadastro',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
