import React, { PureComponent } from 'react';
import { v1 } from 'uuid';
import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native';

import { RecipeData } from '@core/pages/MainScreen/namespace';
import { StateProps, DispatchProps } from './index';
import {
  MainWrapper,
  RecipeComponent,
  PlaceholderText,
  PlaceholderTextWrapper,
} from './components';

type MainScreenProps = StateProps & DispatchProps;
interface MainScreenState {
  search: string;
}

class MainScreen extends PureComponent<MainScreenProps, MainScreenState> {
  state: MainScreenState = {
    search: '',
  };

  public updateSearch = (search: string) => {
    this.setState({ search });
    search.length && this.props.fetchRecipes(search);
  };

  public render() {
    const { data } = this.props;
    const { search } = this.state;
    return (
      <MainWrapper>
        <SearchBar
          placeholder="Type Ingredients Here"
          onChangeText={this.updateSearch}
          value={search}
        />
        {data.length ? (
          <FlatList<RecipeData>
            data={data}
            renderItem={({ item }) => <RecipeComponent recipe={item} />}
            keyExtractor={() => v1()}
          />
        ) : (
          <PlaceholderTextWrapper>
            <PlaceholderText>
              No recipes found. Don't forget to separate ingredients with comma.
            </PlaceholderText>
          </PlaceholderTextWrapper>
        )}
      </MainWrapper>
    );
  }
}

export default MainScreen;
