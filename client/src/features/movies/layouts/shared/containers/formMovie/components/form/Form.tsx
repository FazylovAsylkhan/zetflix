import React, { useEffect, useState } from 'react';
import { Button } from '@common/components';
import classes from './Form.module.scss';
import { IFormValues } from '../../models';
import { arrNamesField } from '../../constants';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  values: IFormValues;
  handlerResetForm: () => void;
}

export function Form(props: FormProps): JSX.Element {
  const { values, handlerResetForm, onSubmit, children } = props;
  const { form, controller } = classes;
  const [hasFilledField, setHasFilledField] = useState(false);

  useEffect(() => {
    const countOfFilledFiled = arrNamesField.filter(
      (fieldName) => values[fieldName] !== ''
    );

    setHasFilledField(countOfFilledFiled.length > 0);
  }, [values]);

  return (
    <form className={form} onSubmit={onSubmit}>
      {children}
      <div className={controller}>
        {hasFilledField && (
          <Button
            type="reset"
            stylesType="transparent"
            onClick={handlerResetForm}>
            Reset
          </Button>
        )}
        <Button type="submit">submit</Button>
      </div>
    </form>
  );
}
