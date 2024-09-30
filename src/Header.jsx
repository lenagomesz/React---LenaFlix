import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <h1>LenaFlix</h1>
      <div className="navbar">
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/recomendacoes">Recomendações</Link></li>
            <li><Link to="/">Sobre</Link></li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Ícone do menu hamburguer */}
        </div>
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/login">🔑 Login</Link></li>
            <li><Link to="/logout">🚪 Sair</Link></li>
            <li><Link to="/series">📺 Séries</Link></li>
            <li><Link to="/filmes">🎬 Filmes</Link></li>
            <li><Link to="/feedbacks">📝 Feedbacks</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
