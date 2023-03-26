import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import AppRouter from './components/AppRouter';
import MyHeader from './components/UI/header/MyHeader';

function App() {
  return (
    <>
      <MyHeader />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
