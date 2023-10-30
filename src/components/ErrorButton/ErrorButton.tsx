import './styled.css';
import { Component, ReactNode } from 'react';
import { IError } from '../../models/interface';

class ErrorButton extends Component<object, IError> {
  constructor(props: object) {
    super(props);
    this.state = {
      error: false,
      messages: 'Create ERROR',
    };
  }

  throwError = () => {
    this.setState({
      messages: 'Building ERROR',
    });
    setTimeout(() => {
      this.setState({
        error: true,
      });
    }, 1200);
  };

  render(): ReactNode {
    if (this.state.error) {
      throw Error('This is ERROR');
    }
    return (
      <button className="error_btn btn btn-danger" onClick={this.throwError}>
        {this.state.messages}
      </button>
    );
  }
}

export default ErrorButton;
