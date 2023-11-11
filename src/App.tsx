import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MainLayout from './components/MainLayout';
import { PeopleProvider } from './Context/peopleContext';

function App() {
  return (
    <ErrorBoundary>
      <PeopleProvider>
        <MainLayout />
      </PeopleProvider>
    </ErrorBoundary>
  );
}

export default App;
