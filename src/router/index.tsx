import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorBoundaryLayout from '../components/ErrorBoundaryLayout';
import Details from '../components/Details';
import { Routes } from './routes';

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: Routes.index,
        element: <App />,
        children: [
          {
            path: Routes.release,
            children: [{ path: Routes.id, element: <Details /> }],
          },
        ],
      },
    ],
  },
]);

export default router;
