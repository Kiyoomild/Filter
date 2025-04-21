import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FilterScreen from './components/FilterScreen'; // ตรวจสอบเส้นทางอีกครั้ง

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FilterScreen">
        <Stack.Screen
          name="FilterScreen"
          component={FilterScreen}
          options={{ headerShown: false }} // ซ่อน header ของ Stack Navigator
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
