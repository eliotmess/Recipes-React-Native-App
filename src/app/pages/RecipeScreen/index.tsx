import React from 'react';
import { Linking } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '@core/index';
import { RouteNames } from '@core/constants';
import {
  RecipeHeader,
  RecipeImage,
  RecipeWrapper,
  RecipeIngredients,
  RecipeButton,
} from './components/RecipeScreen.styles';

export const RecipeScreen = ({
  route,
}: {
  route: RouteProp<RootStackParamList, RouteNames.RecipeScreen>;
}) => {
  const { recipe } = route.params;

  const openRecipeInBrowser = () => {
    try {
      Linking.canOpenURL(recipe.href).then(supported => {
        if (supported) {
          Linking.openURL(recipe.href);
        } else {
          throw Error('Site not found');
        }
      });
    } catch {
      throw Error('Site address is wrong.');
    }
  };

  return (
    <RecipeWrapper>
      <RecipeImage resizeMode="cover" source={{ uri: recipe.thumbnail }} />
      <RecipeHeader>{recipe.title.trim()}</RecipeHeader>
      <RecipeIngredients>Ingredients:</RecipeIngredients>
      <RecipeIngredients>{recipe.ingredients.trim()}</RecipeIngredients>
      <RecipeButton onPress={openRecipeInBrowser} title={'Go to site'} />
    </RecipeWrapper>
  );
};
