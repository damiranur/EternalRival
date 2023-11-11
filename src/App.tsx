import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <ErrorBoundary>
      <MainLayout />
    </ErrorBoundary>
  );
}

export default App;
