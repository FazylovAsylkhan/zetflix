import React from 'react';
import { useFormik } from 'formik';
import { Prompt } from '@common/components';
import { movieValidation } from '@features/movies/lib';
import { getInitialData, getNormalizedData } from './helpers';
import { Fields, Form } from './components';
import { IMovie, IMovieEssential } from '@features/movies/api';
import { IFormValues } from './models';

interface FormMovieProps {
  initialState: null | IMovie;
  title: string;
  onReset?: () => void;
  onSubmit: (values: IMovieEssential) => Promise<void>;
  handlerButtonClose: () => void;
}

export function FormMovie(props: FormMovieProps): JSX.Element {
  const { initialState, title, onSubmit, onReset, handlerButtonClose } = props;

  const handleResetForm = (): void => {
    void formik.setValues(getInitialData());
    onReset?.();
  };

  const handleSubmit = async (formValues: IFormValues): Promise<void> => {
    await onSubmit(getNormalizedData(formValues));
  };

  const formik = useFormik({
    initialValues: getInitialData(initialState),
    onSubmit: handleSubmit,
    validationSchema: movieValidation,
  });

  return (
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
  );
}
