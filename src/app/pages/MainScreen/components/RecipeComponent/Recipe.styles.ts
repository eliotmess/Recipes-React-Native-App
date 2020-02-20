import { styled } from '@core/styles/themes/defaultTheme';

export const RecipeImage = styled.Image`
  width: 100%;
  height: 200px;
`;
export const RecipeTitle = styled.Text`
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.font.size.large};
  width: 100%;
  text-align: center;
  padding: ${props => props.theme.padding.medium} 0;
`;
export const RecipeWrapper = styled.TouchableOpacity`
  border: 1px solid ${props => props.theme.colors.dark};
  margin: ${props => props.theme.margin.medium};
  background-color: ${props => props.theme.colors.grey};
`;
