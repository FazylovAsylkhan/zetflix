import React from 'react';
import { joinClasses } from 'helpers';
import classes from './Textarea.module.scss';

interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  value: string;
  id: string;
  parentClasses?: string;
}

export function Textarea({ id, onChange, value }: TextareaProps): JSX.Element {
  const { textarea, parentClasses } = classes;

  return (
    <textarea
      id={id}
      className={joinClasses(parentClasses, textarea)}
      onChange={onChange}
      value={value}
    />
  );
}
