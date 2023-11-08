import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailedProductPage from './pages/DetailedProductPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/:details" element={<DetailedProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
