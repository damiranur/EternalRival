import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorBoundaryLayout from '../components/ErrorBoundaryLayout';
import ReleaseItem from '../components/ReleaseItem';
import { Pathnames } from '../types';

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: [
      {
        path: Pathnames.index,
        element: <App />,
        children: [
          {
            path: Pathnames.release,
            element: <ReleaseItem />,
          },
        ],
      },
    ],
  },
]);

export default router;
