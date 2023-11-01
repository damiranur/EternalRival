import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './pages/posts';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
