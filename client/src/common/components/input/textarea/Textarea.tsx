import React from 'react';
import { joinClasses } from '@common/helpers';
import classes from './Textarea.module.scss';

interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  parentClasses?: string;
}

export function Textarea(props: TextareaProps): JSX.Element {
  const { id, onChange, value, parentClasses, onBlur } = props;
  const { textarea } = classes;

  return (
    <textarea
      id={id}
      className={joinClasses(parentClasses, textarea)}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
    />
  );
}
