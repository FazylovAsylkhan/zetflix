import React from 'react';
import { H2, Background, Modal, ButtonClose } from '@common/components';
import classes from './Prompt.module.scss';

interface PromptProps {
  title: string;
  children: React.ReactNode;
  handlerButtonClose: () => void;
}

export function Prompt({
  children,
  handlerButtonClose,
  title,
}: PromptProps): JSX.Element {
  const { prompt, modal, h2 } = classes;

  return (
    <div className={prompt}>
      <Background />
      <Modal parentClasses={modal}>
        <ButtonClose onClick={handlerButtonClose} />
        <H2 stylesType="primary" parentClasses={h2}>
          {title}
        </H2>
        {children}
      </Modal>
    </div>
  );
}
