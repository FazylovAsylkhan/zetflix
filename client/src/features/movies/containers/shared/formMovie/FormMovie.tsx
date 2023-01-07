import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { alertMessage } from '@assets/data';
import { Prompt, Alert } from '@common/components';
import { useAppSelector } from '@common/hooks';
import { getNormalizedParams } from '@common/helpers';
import { movieValidation } from '@features/movies/lib';
import {
  addMovieInCollection,
  resetFormMovie,
  selectCardMovie,
  selectUrlParams,
} from '@features/movies/services/redux';
import { getInitialData, getNormalizedData } from './helpers';
import { IFormValues } from './models';
import { Fields, Form } from './components';

interface FormMovieProps {
  title: string;
  handlerButtonClose: () => void;
}

export function FormMovie({
  title,
  handlerButtonClose,
}: FormMovieProps): JSX.Element {
  const dispatch = useDispatch();
  const cardMovie = useAppSelector(selectCardMovie);
  const params = useAppSelector(selectUrlParams);
  const [isShownAlert, setIsShownAlert] = useState(false);
  const isShownFormMovie = !isShownAlert;

  const addMovie = async (movieData: IFormValues): Promise<void> => {
    const normalizedData = getNormalizedData(movieData);
    const normalizedUrl = getNormalizedParams(
      params.sortBy,
      params.sortOrder,
      params.search,
      params.searchBy,
      params.filter,
      params.limit
    );
    await addMovieInCollection(normalizedData, normalizedUrl)(dispatch);
  };

  const handleSubmit = async (values: IFormValues): Promise<void> => {
    await addMovie(values);
    setIsShownAlert(true);
  };

  const handleResetForm = (): void => {
    dispatch(resetFormMovie());
    void formik.setValues(getInitialData());
  };

  const formik = useFormik({
    initialValues: getInitialData(cardMovie.formMovie),
    onSubmit: handleSubmit,
    validationSchema: movieValidation,
  });

  return (
    <>
      {isShownFormMovie && (
        <Prompt title={title} handlerButtonClose={handlerButtonClose}>
          <Form
            onSubmit={formik.handleSubmit}
            values={formik.values}
            handlerResetForm={() => handleResetForm()}>
            <Fields
              fields={{
                errors: formik.errors,
                values: formik.values,
                handlerChange: formik.handleChange,
                handlerBlur: formik.handleBlur,
              }}
              form={{
                setFieldValue: formik.setFieldValue,
              }}
            />
          </Form>
        </Prompt>
      )}
      {isShownAlert && (
        <Alert message={alertMessage} handlerButtonClose={handlerButtonClose} />
      )}
    </>
  );
}
