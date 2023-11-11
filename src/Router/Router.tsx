import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from '../App';
import Details from '../components/Cards/Details/Details';
import ErrorPageCard from '../components/Cards/ErrorPageCard/ErrorPageCard';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path=":id"
        element={<Details />}
        errorElement={<ErrorPageCard />}
      />
    </Route>
  )
);
