import { AxiosResponse } from 'axios';
import ApiService from '../config';
import { RecipeDataFromAPI } from '@core/pages/MainScreen/namespace/index';

export const getRecipesService = (
  ingredients: string,
): Promise<RecipeDataFromAPI> => {
  const url = `api/`;
  const params = {
    i: ingredients,
    p: 1,
  };
  return ApiService.get<AxiosResponse<RecipeDataFromAPI>>(url, params)
    .then(({ data }) => data)
    .catch((error: string) => {
      throw new Error(error);
    });
};
