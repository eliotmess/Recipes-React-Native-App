import { ReturnType, reduxAsyncAction } from '@core/namespace';

export enum MainScreenTypes {
  FETCH_RECIPES = 'FETCH_RECIPES',
}

export const {
  execute: fetchRecipes,
  success: fetchRecipesSuccess,
  failed: fetchRecipesFailed,
} = reduxAsyncAction(MainScreenTypes.FETCH_RECIPES);

export type MainScreenActions =
  | ReturnType<typeof fetchRecipes>
  | ReturnType<typeof fetchRecipesSuccess>
  | ReturnType<typeof fetchRecipesFailed>;
