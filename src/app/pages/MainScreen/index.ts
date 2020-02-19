import { compose, bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
// import { NavigationScreenComponent } from 'react-navigation';
// import { NavigationStackScreenProps } from 'react-navigation-stack';
// import {
//   NavigationStructureProps,
//   ScreenPropsConfig,
// } from '@common/types/navigation';
import { MainScreenState } from './namespace';
import { fetchRecipes } from './store/actions';
import MainScreen from './MainScreen';

export interface DispatchProps {
  fetchRecipes(fetchArgs: any): void;
}

export interface StateProps {
  data: Array<any>;
}

// export type OwnProps = NavigationStackScreenProps;
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

const MainScreenComposed = compose(
  connect<StateProps, DispatchProps, OwnProps, ReducerType>(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(MainScreen);

export const MainScreenModule = {
  module: MainScreenComposed,
  name: 'MainScreen',
  options: {
    title: 'main screen',
    headerStyle: {
      height: 60,
    },
  },
};
