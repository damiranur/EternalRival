import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MainLayout from './components/MainLayout';
import { PeopleProvider } from './Context/peopleContext';
import { SearchProvider } from './Context/searchContext';

function App() {
  return (
    <ErrorBoundary>
      <SearchProvider>
        <PeopleProvider>
          <MainLayout />
        </PeopleProvider>
      </SearchProvider>
    </ErrorBoundary>
  );
}

export default App;
