import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import HomeScreen from './pages/Homescreen/index.jsx';
import routes from './routes/routes.js';

const App = () => {
  return (
    <>
          <Layout>

      <Routes>
        <Route path={routes.login} element={<div>login</div>} />
        <Route path={routes.home} element={<HomeScreen />} />
        </Routes>
        </Layout>
    </>
  );
};

export default App;

