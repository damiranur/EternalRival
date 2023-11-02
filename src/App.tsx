import { Route, Routes, Outlet } from 'react-router-dom';
import Posts from './pages/Posts';
import DetailedProductPage from './pages/DetailedProductPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts />}>
        <Route path=":page/:productName" element={<Outlet />}>
          <Route index element={<DetailedProductPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
