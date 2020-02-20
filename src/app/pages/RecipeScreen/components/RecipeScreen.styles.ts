import { styled } from '@core/styles/themes/defaultTheme';

export const RecipeWrapper = styled.ScrollView`
  width: 100%;
  padding: 0 ${props => props.theme.padding.large};
  background-color: ${props => props.theme.colors.light};
`;

export const RecipeHeader = styled.Text`
  font-size: ${props => props.theme.font.size.xlarge};
  padding: ${props => props.theme.padding.large} 0;
  text-align: center;
`;

export const RecipeIngredients = styled.Text`
  font-size: ${props => props.theme.font.size.medium};
  margin-bottom: ${props => props.theme.padding.medium};
`;

export const RecipeImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const RecipeButton = styled.Button`
  width: 100%;
  height: 60px;
  padding: ${props => props.theme.padding.medium} 0;
  background-color: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.dark};
  margin: ${props => props.theme.padding.large} 0;
`;
