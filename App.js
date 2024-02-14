import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TriangleScreen from './components/TriangleScreen';
import CircleScreen from './components/CircleScreen';
import SquareScreen from './components/SquareScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Háromszög" component={TriangleScreen} />
        <Tab.Screen name="Kör" component={CircleScreen} />
        <Tab.Screen name="Négyszög" component={SquareScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

