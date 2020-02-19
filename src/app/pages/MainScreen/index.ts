import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { MainScreenState, RecipeData } from './namespace';
import { fetchRecipes } from './store/actions';
import MainScreen from './MainScreen';

export interface DispatchProps {
  fetchRecipes(fetchArgs: string): void;
}

export interface StateProps {
  data: Array<RecipeData>;
}

export type OwnProps = '';

interface ReducerType {
  mainScreenReducer: MainScreenState;
}

const mapStateToProps = (state: ReducerType): StateProps => {
  return {
    data: state.mainScreenReducer.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ fetchRecipes }, dispatch);

export default connect<StateProps, DispatchProps, OwnProps, ReducerType>(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
