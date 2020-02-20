import { styled } from '@core/styles/themes/defaultTheme';

export const MainWrapper = styled.View`
  background-color: ${props => props.theme.colors.light};
  flex: 1;
`;

export const PlaceholderTextWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PlaceholderText = styled.Text`
  text-align: center;
`;
