import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './nav/StackNav';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
