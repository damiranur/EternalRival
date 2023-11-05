import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Cards from './components/Cards/Cards';
import { Context } from './components/Context/Context';
import MainLayout from './components/MainLayout';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import CardsLayout from './components/CardsLayout';
import { getData, getDataWithParams } from './api/data';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />} loader={getData}>
      <Route path="/" element={<CardsLayout />}>
        <Route path="/:param" element={<Cards />} loader={getDataWithParams} />
      </Route>
      <Route path="*" element={<ErrorBoundary />} />
    </Route>
  )
);

function App() {
  return (
    <Context>
      <RouterProvider router={router} />
    </Context>
  );
}

export default App;
