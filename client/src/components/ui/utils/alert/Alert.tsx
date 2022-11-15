import React from 'react';
import { Modal, Background, ButtonClose, H2 } from 'components/ui';
import classes from './Alert.module.scss';

interface IMessage {
  title: string;
  description: string;
}

interface AlertPromps {
  message: IMessage;
  handlerButtonClose: () => void;
}

export function Alert({
  handlerButtonClose,
  message,
}: AlertPromps): JSX.Element {
  const { alert, modal, icon, wrapper, descriptionText } = classes;
  const { title, description } = message;

  return (
    <div className={alert}>
      <Background />
      <Modal parentClasses={modal}>
        <ButtonClose onClick={handlerButtonClose} />
        <div className={wrapper}>
          <div className={icon} />
          <H2 stylesType="primary">{title}</H2>
          <p className={descriptionText}>{description}</p>
        </div>
      </Modal>
    </div>
  );
}
