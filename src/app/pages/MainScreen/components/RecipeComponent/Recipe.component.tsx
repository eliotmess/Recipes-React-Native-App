import React, { PureComponent } from 'react';
// import { NavigationStackScreenProps } from 'react-navigation-stack';

import { RecipeData } from '@core/pages/MainScreen/namespace';
// import Modules from '@core/pages';
import {
  RecipeDescription,
  RecipeImage,
  RecipeTitle,
  RecipeWrapper,
} from './Recipe.styles';

interface OwnProps {
  recipe: RecipeData;
}

// type RecipeScreenProps = WrappedComponentProps &
//   NavigationStackScreenProps &
//   OwnProps;

type RecipeScreenProps = OwnProps;

class RecipeComponent extends PureComponent<RecipeScreenProps> {
  //   private goToOwnPage = () => {
  //     this.props.navigation.navigate(Modules.RecipeScreenModule.name, {
  //       Recipe: this.props.Recipe,
  //     });
  //   };

  public render() {
    const { recipe } = this.props;
    return (
      <RecipeWrapper>
        <RecipeImage
          resizeMode="cover"
          source={{
            uri: recipe.thumbnail,
          }}
        />
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <RecipeDescription>{recipe.ingredients}</RecipeDescription>
      </RecipeWrapper>
    );
  }
}

export default RecipeComponent;
