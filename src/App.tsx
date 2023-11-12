import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound, SearchView } from './pages';
import { DetailBlock, ErrorBoundary } from './components';
import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<SearchView />} />
          <Route path='/:search/' element={<SearchView />}>
            <Route path=':id' element={<DetailBlock />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}