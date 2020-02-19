import React, { PureComponent } from 'react';
import { v1 } from 'uuid';
// import {
//   topicValues,
//   timeValues,
//   sortValues,
//   PickerData,
// } from '@pages/MainArticlesScreen/namespace';
// import Modules from '@core/pages';

import { StateProps, DispatchProps, OwnProps } from './index';
import { MainWrapper } from './components';

type MainScreenProps = OwnProps & StateProps & DispatchProps;

class MainScreen extends PureComponent<MainScreenProps> {
  public componentDidMount() {
    // this.getArticles();
  }

  //   private getArticles = () => {
  //     this.props.fetchRecipes({
  //       page,
  //       filters: { topic, sortBy, date },
  //     });
  //   };

  public render() {
    const { data } = this.props;
    return <MainWrapper></MainWrapper>;
  }
  //   public render() {
  //     const { data } = this.props;
  //     return (
  //       <MainWrapper>
  //         <ArticlesFlatList
  //           data={data}
  //           renderItem={({ item }) => <Recipe recipe={item} />}
  //           keyExtractor={() => v1()}
  //           ListHeaderComponent={<Filters />}
  //           centerContent
  //         />
  //       </MainWrapper>
  //     );
  //   }
}

export default MainScreen;
