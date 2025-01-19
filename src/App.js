import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout';
import AddCompany from './pages/CreateCompany/index.jsx';
import HomeScreen from './pages/Homescreen/index.jsx';
import Login from './pages/Login/index.jsx';
import routes from './routes/routes.js';

const App = () => {
  return (
    <Routes>
      <Route path={routes.login} element={<Login />} />

      <Route path="/*"
        element={
          <Layout>
            <Routes>
              <Route path={routes.home} element={<HomeScreen />} />
              <Route path={"add-company"} element={<AddCompany />} />

            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
