import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchView } from './pages';
import { DetailBlock, ErrorBoundary } from './components';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path='' element={<SearchView />} />
          <Route path='/:search/' element={<SearchView />}>
            <Route path=':id' element={<DetailBlock />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
