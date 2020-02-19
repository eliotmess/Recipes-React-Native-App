import { put, takeLatest, all, fork, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
// import {
//   FiltersProps,
//   getFilterProps,
//   FetchArticlesArgs,
//   ArticleDataFromAPI,
// } from '@core/pages/MainArticlesScreen/namespace';
import { getRecipesService } from '@core/services';
import {
  MainScreenTypes,
  fetchRecipesSuccess,
  fetchRecipesFailed,
} from '../actions';

function* getRecipes(action: { payload: any; type: string }): SagaIterator {
  try {
    const { ingredients } = action.payload;
    const recipes: any = yield call(getRecipesService, ingredients);
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
