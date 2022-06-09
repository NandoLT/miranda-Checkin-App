import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Screens/Home/HomeScreen';
import { CheckInScreen } from './Screens/CheckIn/CheckInScreen';
import { InfoScreen } from './Screens/Info/InfoScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="CheckIn" component={CheckInScreen}/>
        <Stack.Screen name="Info" component={InfoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}



export default App;