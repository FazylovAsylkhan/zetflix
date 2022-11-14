import React from 'react';
import { IDefaultProps, ITextMessage } from './models';
import { DEFAULT_ERROR } from './textsErrors';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps extends IDefaultProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  static defaultProps: IDefaultProps = {
    textMessage: DEFAULT_ERROR,
  };

  textMessage: ITextMessage | undefined;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.textMessage = props.textMessage;
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  override render(): JSX.Element | React.ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    const ErrorMessage = (
      <div>
        <h2>{this.textMessage?.title}</h2>
        <p>{this.textMessage?.description}</p>
      </div>
    );

    return hasError ? ErrorMessage : children;
  }
}

export default ErrorBoundary;
