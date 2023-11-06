import { Component, ReactNode } from 'react';
import { ErrorProps } from '../../models/interface';

type ErrorState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    console.error(error);
    return { hasError: true };
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error_container">
          <span>Oops, something went wrong..</span>
          <span>Please, refresh the page!</span>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
