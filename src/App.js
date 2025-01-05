import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './pages/Homescreen';
import routes from './routes/routes';

const App = () => {
  return (
    <>
      <Routes>
        <Route path={routes.login} element={<div>login</div>} />
        <Route path={routes.home} element={<HomeScreen />} />

      </Routes>
    </>
  );
};

export default App;

