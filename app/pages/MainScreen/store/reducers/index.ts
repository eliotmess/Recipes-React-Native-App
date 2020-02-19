import { reduxAsyncReducer } from '@core/namespace';
import { MainScreenActions, MainScreenTypes } from '../actions';
import { MainScreenState } from '@core/pages/MainScreen/namespace';

const defaultState: MainScreenState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  error: null,
};

export const mainScreenReducer = (
  state = defaultState,
  action: MainScreenActions,
) => {
  return reduxAsyncReducer<MainScreenActions, MainScreenState>(
    MainScreenTypes.FETCH_RECIPES,
    action,
    state,
  );
};
