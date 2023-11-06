import './styled.css';
import { useState } from 'react';

function ErrorButton() {
  const [error, setError] = useState<boolean>(false);
  const [messages, setMessages] = useState<string>('Create ERROR');

  const throwError = () => {
    setMessages('Building ERROR');
    setTimeout(() => setError(true), 1200);
  };

  if (error) {
    throw Error('This is ERROR');
  }

  return (
    <button className="error_btn btn btn-danger" onClick={throwError}>
      {messages}
    </button>
  );
}

export default ErrorButton;
