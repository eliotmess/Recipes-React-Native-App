import { AxiosResponse } from 'axios';
import ApiService from '../config';

export const getRecipesService = (ingredient: any): Promise<any> => {
  const url = `everything`;
  const params = {
    ingredient,
  };
  return ApiService.get<AxiosResponse<any>>(url, params)
    .then(({ data }: any) => data)
    .catch((error: string) => {
      throw new Error(error);
    });
};
