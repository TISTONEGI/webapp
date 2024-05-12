import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Note from './components/Note';
import Login from './components/Login';
import Sobre from './components/Sobre'; 
import Cadastro from './components/Cadastro';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    console.log(`Login com email: ${email} e senha: ${password}`);
    if (email === 'user@gmail.com' && password === '123456') {
      setIsLoggedIn(true);
    } else {
      console.log('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleCadastro = (email, password) => {
    console.log(`Cadastro com email: ${email} e senha: ${password}`);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/"></Link>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/cadastro">Cadastro</Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/sobre" element={<Sobre />} />
          <Route
            path="/login"
            element={
              !isLoggedIn ? <Login handleLogin={handleLogin} /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/cadastro"
            element={
              !isLoggedIn ? <Cadastro handleCadastro={handleCadastro} /> : <Navigate to="/" replace />
            }
          />
          {isLoggedIn && <Route path="/" element={<Note />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
