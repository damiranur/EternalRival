import MainPage from './pages/MainPage';
import AppProvider from './context';
import './App.module.scss';

const App = () => {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  );
};

export default App;
