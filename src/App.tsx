import MainPage from './pages/MainPage';
import AppContextProvider from './context';
import './App.module.scss';

const App = () => {
  return (
    <AppContextProvider>
      <MainPage />
    </AppContextProvider>
  );
};

export default App;
