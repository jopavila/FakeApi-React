import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/Login/LoginPage';
import UsersListPage from './pages/Users/UsersListPage';
import EditUserPage from './pages/EditUsers/EditUserPage';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { token } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={token ? <Layout /> : <Navigate to="/login" />}>
        <Route path="/users" element={<UsersListPage />} />
        <Route path="/edit/:id" element={<EditUserPage />} />
      </Route>
      <Route path="*" element={<Navigate to={token ? "/users" : "/login"} />} />
    </Routes>
  );
}

export default App;