import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@core/styles/themes/defaultTheme';
import { rootStore } from '@core/store';
import MainScreen from '@core/pages/MainScreen';
import { RecipeScreen } from '@core/pages/RecipeScreen';
import { AppWrapper } from '@core/styles/components';
import { RecipeData } from '@core/pages/MainScreen/namespace';
import { RouteNames } from '@core/constants';

export type RootStackParamList = {
  MainScreen: undefined;
  RecipeScreen: { recipe: RecipeData };
};
const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={rootStore}>
        <ThemeProvider theme={defaultTheme}>
          <AppWrapper>
            <Stack.Navigator initialRouteName={RouteNames.MainScreen}>
              <Stack.Screen
                name={RouteNames.MainScreen}
                component={MainScreen}
                options={{ title: 'iFM' }}
              />
              <Stack.Screen
                name={RouteNames.RecipeScreen}
                component={RecipeScreen}
                options={{ title: 'iFM' }}
              />
            </Stack.Navigator>
          </AppWrapper>
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
