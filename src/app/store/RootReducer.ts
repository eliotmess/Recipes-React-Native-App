import { combineReducers, Reducer } from 'redux';

import { mainScreenReducer } from '@core/pages/MainScreen/store/reducers';

const rootReducer = combineReducers({
  mainScreenReducer,
});

export default rootReducer;
