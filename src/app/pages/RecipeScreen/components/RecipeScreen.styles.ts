import { styled } from '@core/styles/themes/defaultTheme';

export const RecipeWrapper = styled.ScrollView`
  width: 100%;
  padding: 0 ${props => props.theme.padding.large};
  background-color: ${props => props.theme.colors.primary};
`;

export const RecipeHeader = styled.Text`
  font-size: 16px;
`;

export const RecipeIngredients = styled.Text`
  font-size: 12px;
`;

export const RecipeImage = styled.Image`
  width: 100%;
  height: 200;
`;

export const RecipeButton = styled.Button`
  width: 100%;
`;
