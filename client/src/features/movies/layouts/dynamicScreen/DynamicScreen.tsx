import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '@common/hooks';
import { IMovieEssential, postMovie } from '@features/movies/api';
import { selectDetailMovie } from '@features/movies/services/redux';
import { Alert, Button, Loader } from '@common/components';
import {
  LoaderScreen,
  SearchForm,
  SearchPanel,
  Detail,
  Movie,
  Header,
} from './components';
import { FormMovie, NamesParams } from '../shared';
import { congratulationMessage } from '@assets/data';

interface DynamicScreenProps {
  stateSearchParams: {
    searchParams: URLSearchParams;
    updateParams: () => void;
  };
  searchQuery: string | undefined;
}

export function DynamicScreen(props: DynamicScreenProps): JSX.Element {
  const navigate = useNavigate();

  const { stateSearchParams, searchQuery } = props;
  const { searchParams, updateParams } = stateSearchParams;

  const isShownFormMovie = searchParams.get(NamesParams.ADD) !== null;
  const isShownAlert = searchParams.get(NamesParams.ALERT) !== null;

  const { response, isFetching, error } = useAppSelector(selectDetailMovie);

  const initialValue = searchQuery !== undefined ? searchQuery : '';
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleSearchQuery = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const isNotUrl = !(searchValue.includes('/') || searchValue.includes('?'));
    const isEmpty = searchValue === '';

    if (isNotUrl) {
      navigate(`../search/${searchValue}`);
    }
    if (isEmpty) {
      navigate('../search');
    }
  };

  const handleAddingMovie = async (
    formValues: IMovieEssential
  ): Promise<void> => {
    await postMovie(formValues);
    searchParams.delete(NamesParams.ADD);
    searchParams.set(NamesParams.ALERT, 'congratulation');
    updateParams();
  };

  return (
    <LoaderScreen>
      {response !== null ? (
        <Detail>
          <Header>
            <Button
              stylesType="search"
              type="button"
              onClick={() => {
                searchParams.delete(NamesParams.MOVIE_ID);
                updateParams();
              }}
            />
          </Header>
          <Movie data={response} />
        </Detail>
      ) : (
        <SearchPanel>
          <Header>
            <Button
              stylesType="light"
              type="button"
              onClick={() => {
                searchParams.set(NamesParams.ADD, 'movie');
                updateParams();
              }}>
              + Add movie
            </Button>
          </Header>
          <SearchForm
            stateInput={{
              value: searchValue,
              setValue: (e) => setSearchValue(e.target.value),
            }}
            onSubmit={handleSearchQuery}
          />
          {isShownFormMovie && (
            <FormMovie
              initialState={null}
              title="add Movie"
              handlerButtonClose={() => {
                searchParams.delete(NamesParams.ADD);
                updateParams();
              }}
              onSubmit={handleAddingMovie}
            />
          )}
          {isShownAlert && (
            <Alert
              message={congratulationMessage}
              handlerButtonClose={() => {
                searchParams.delete(NamesParams.ALERT);
                updateParams();
              }}
            />
          )}
        </SearchPanel>
      )}
      {isFetching && <Loader isWithBlockingWindow />}
      {error !== null && <div>{error}</div>}
    </LoaderScreen>
  );
}
