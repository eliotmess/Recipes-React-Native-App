import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RecipeData } from '@core/pages/MainScreen/namespace';
import { RouteNames } from '@core/constants';
import { RecipeImage, RecipeTitle, RecipeWrapper } from './Recipe.styles';

export const RecipeComponent = ({ recipe }: { recipe: RecipeData }) => {
  const { navigate } = useNavigation();
  return (
    <RecipeWrapper
      onPress={() => navigate(RouteNames.RecipeScreen, { recipe })}
    >
      <RecipeImage
        resizeMode="cover"
        source={{
          uri: recipe.thumbnail,
        }}
      />
      <RecipeTitle>{recipe.title.trim()}</RecipeTitle>
    </RecipeWrapper>
  );
};
