import { useRouteError } from 'react-router-dom';

function ErrorPageCard() {
  const error = useRouteError() as Error;
  return (
    <div>
      <p>{error.message}</p>
    </div>
  );
}

export default ErrorPageCard;
