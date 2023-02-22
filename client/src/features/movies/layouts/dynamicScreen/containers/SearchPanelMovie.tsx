import { congratulationMessage } from '@assets/data';
import { Alert, Button } from '@common/components';
import { IMovieEssential, postMovie } from '@features/movies/api';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormMovie, NamesParams } from '../../shared';
import { Header, SearchForm, SearchPanel } from '../components';

interface SearchPanelMovieProps {
  stateSearchParams: {
    searchParams: URLSearchParams;
    updateParams: () => void;
  };
  searchQuery: string | undefined;
}

export function SearchPanelMovie(props: SearchPanelMovieProps): JSX.Element {
  const navigate = useNavigate();

  const { stateSearchParams, searchQuery } = props;
  const { searchParams, updateParams } = stateSearchParams;

  const isShownFormMovie = searchParams.get(NamesParams.ADD) !== null;
  const isShownAlert = searchParams.get(NamesParams.ALERT) !== null;

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
  );
}
