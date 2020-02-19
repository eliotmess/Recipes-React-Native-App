import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './app/styles/themes/defaultTheme';
// import { AppWrapper } from '@styles/components/containers';

import { rootStore } from './app/store';
import MainScreen from '@core/pages/MainScreen/MainScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={rootStore}>
        <ThemeProvider theme={defaultTheme}>
          <Stack.Navigator initialRouteName="MainScreen">
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{ title: 'Recipe App' }}
            />
          </Stack.Navigator>
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
