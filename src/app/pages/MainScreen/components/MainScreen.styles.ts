import { styled } from '@core/styles/themes/defaultTheme';
import { FlatList } from 'react-native';

export const MainWrapper = styled.View`
  background-color: #fefefe;
  flex: 1;
`;

export const RecipesFlatList = styled(FlatList)`
  border: 1px solid #000000;
`;

export const PlaceholderTextWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PlaceholderText = styled.Text`
  text-align: center;
`;
