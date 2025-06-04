import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { loginUser } from '../../services/userService';
import Button from '../../components/Button';
import './LoginPage.css';

export default function LoginPage() {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      login(data.token);
      navigate('/users');
    } catch (err) {
      setError('Credenciais inválidas');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Simplificamos juntos</h1>
        <p>Supply Chain | Industrial | Systems</p>
      </div>
      <div className="login-right">
        <div className="login-form">
          <div className="logo-placeholder">LOGO</div>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error">{error}</p>}
            <Button type="submit" variant="primary">Logar</Button>
            <div className="links">
              <a href="#">Esqueci minha senha</a>
              <a href="#">Cadastre-se</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}