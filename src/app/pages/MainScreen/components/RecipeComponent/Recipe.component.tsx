import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { RecipeData } from '@core/pages/MainScreen/namespace';
import { RouteNames } from '@core/constants';
import { RecipeImage, RecipeTitle, RecipeWrapper } from './Recipe.styles';

export const RecipeComponent = ({ recipe }: { recipe: RecipeData }) => {
  const navigation = useNavigation();
  return (
    <RecipeWrapper>
      <RecipeImage
        resizeMode="cover"
        source={{
          uri: recipe.thumbnail,
        }}
      />
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <Button
        onPress={() => navigation.navigate(RouteNames.RecipeScreen, { recipe })}
        title="Go to Brent's profile"
      />
    </RecipeWrapper>
  );
};
