/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import 'react-native-gesture-handler';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import EditExpense from './components/molecules/editExpense'
import Home from './components/organisms/home';

const Stack = createStackNavigator();



export default function App() {

  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#171717', height: 110, borderTopEndRadius: 30, borderTopStartRadius: 30  }, headerTintColor: '#02f55f', headerTitleStyle: {
            color: '#ff8f33', fontSize: 26
          }}}>
          <Stack.Screen name="Registros Recentes" component={Home} />
          <Stack.Screen name="Adição de Registro" component={EditExpense} />

        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: "red",
    flex: 3
  },

});

// export default App;
