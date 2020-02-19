export interface MainScreenState {
  data: Array<RecipeData> | [];
  isLoading: boolean;
  isSuccess: boolean;
  error: null | Array<string>;
}

export interface RecipeData {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}

export interface RecipeDataFromAPI {
  results: Array<RecipeData>;
}
