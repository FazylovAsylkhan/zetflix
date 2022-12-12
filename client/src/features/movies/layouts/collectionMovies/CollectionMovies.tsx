import React, { useContext, useEffect } from 'react';
import { SidebarMovie, CardsMovie } from '@features/movies/containers';
import { Collection, TotalCount } from './components';
import { IRootState } from '@app/store';
import {
  IFetchMoviesState,
  loadMovies,
} from '@features/movies/services/fetchMovies';
import { connect, ConnectedProps } from 'react-redux';
import { ICardMovie } from '@features/movies/containers/cardsMovie';
import { Loader } from '@common/components';
import { MovieContext } from '@features/movies/context';
import {
  SelectOptions,
  sortingParams,
} from '@features/movies/containers/sidebarMovie/constants';

export function CollectionMovies(props: PropsFromStore): JSX.Element {
  const { loadedData, loadNewMovies } = props;
  const { data, isFetching, error } = loadedData;

  const MovieCtx = useContext(MovieContext);

  useEffect(() => {
    loadNewMovies(MovieCtx?.stateCurrentUrl.currentUrlParams);
  }, [MovieCtx?.stateCurrentUrl.currentUrlParams, loadNewMovies]);

  const handleChangeSorting = (selectedSorting: string): void => {
    MovieCtx?.stateMovie.setSelectedMovie(undefined);

    switch (selectedSorting) {
      case SelectOptions.VOTE_COUNT:
      case SelectOptions.POPULARITY:
      case SelectOptions.BUDGET:
        MovieCtx?.stateSortingParams.setSortingParams(
          sortingParams[selectedSorting]
        );
        break;
      default:
        MovieCtx?.stateSortingParams.setSortingParams(
          sortingParams[SelectOptions.RELEASE_DATE]
        );
    }
  };

  const handleChangeGenre = (selectedGenre: string): void => {
    MovieCtx?.stateMovie.setSelectedMovie(undefined);
    MovieCtx?.stateGenreParams.setGenreParams(`filter=${selectedGenre}`);
  };

  return (
    <>
      {error !== null && <div>{error}</div>}
      {isFetching && <Loader isWithBlockingWindow={true} />}
      {!Number.isNaN(data.totalAmount) && (
        <Collection>
          <SidebarMovie
            onChangeSorting={handleChangeSorting}
            onChangeGenre={handleChangeGenre}
          />
          <TotalCount value={data.totalAmount} />
          <CardsMovie dataCards={data.cards} />
        </Collection>
      )}
    </>
  );
}

const mapStateToProps = (
  state: IRootState
): { loadedData: IFetchMoviesState<ICardMovie[]> } => ({
  loadedData: state.fetchMoviesReducer,
});
const mapDispatchToProps = {
  loadNewMovies: loadMovies,
};

const connectToStore = connect(mapStateToProps, mapDispatchToProps);
type PropsFromStore = ConnectedProps<typeof connectToStore>;
export const ConnectedCollectionMovies = connectToStore(CollectionMovies);
