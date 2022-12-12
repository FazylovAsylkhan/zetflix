import React from 'react';
import { Modal, Background, ButtonClose, H2, Button } from '@common/components';
import classes from './Confirm.module.scss';

interface IMessage {
  title: string;
  description: string;
  textButton: string;
}
interface ConfirmProps {
  message: IMessage;
  handlerButtonClose: () => void;
}

export function Confirm({
  message,
  handlerButtonClose,
}: ConfirmProps): JSX.Element {
  const { confirm, modal, h2, textDescription, button } = classes;
  const { title, description, textButton } = message;

  return (
    <div className={confirm}>
      <Background />
      <Modal parentClasses={modal}>
        <ButtonClose onClick={handlerButtonClose} />
        <H2 stylesType="primary" parentClasses={h2}>
          {title}
        </H2>
        <p className={textDescription}>{description}</p>
        <Button parentClasses={button} onClick={handlerButtonClose}>
          {textButton}
        </Button>
      </Modal>
    </div>
  );
}
