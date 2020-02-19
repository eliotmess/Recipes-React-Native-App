import { RecipeDataFromAPI } from './../../namespace/index';
import { put, takeLatest, all, fork, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { getRecipesService } from '@core/services';
import {
  MainScreenTypes,
  fetchRecipesSuccess,
  fetchRecipesFailed,
} from '../actions';

function* getRecipes(action: { payload: string; type: string }): SagaIterator {
  try {
    const ingredients = action.payload;
    const { results }: RecipeDataFromAPI = yield call(
      getRecipesService,
      ingredients,
    );
    const recipes = results.concat([]).sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    yield put(fetchRecipesSuccess(recipes));
  } catch (e) {
    yield put(fetchRecipesFailed(e));
  }
}

function* watchGetRecipes() {
  yield takeLatest(MainScreenTypes.FETCH_RECIPES, getRecipes);
}

export default function* mainScreenSaga() {
  yield all([fork(watchGetRecipes)]);
}
