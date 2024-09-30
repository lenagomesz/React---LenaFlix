import React, { useState } from 'react';
import MovieCarousel from './MovieCarousel';
import './App.css';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterMovies = (movies) => {
    if (!searchTerm) return movies;
    return movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <main className={`home ${darkMode ? 'dark' : ''}`}>
      <input
        type="text"
        className="search-bar"
        placeholder="Buscar filmes ou séries..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <h2>Filmes e Séries em Destaque</h2>
      <MovieCarousel movies={filterMovies(movies1)} detailed={true} />

      <h2>Mais Filmes</h2>
      <MovieCarousel movies={filterMovies(movies2)} detailed={true} />

      <h2>Outros Filmes</h2>
      <MovieCarousel movies={filterMovies(movies3)} detailed={true} />

      <button className="dark-mode-toggle" onClick={toggleDarkMode} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        {darkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </main>
  );
};

const movies1 = [
  { id: 1, title: "Filme 1", year: "2021", genre: "Ação", rating: "8.5", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 1." },
  { id: 2, title: "Filme 2", year: "2022", genre: "Drama", rating: "7.5", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 2." },
  { id: 3, title: "Filme 3", year: "2020", genre: "Comédia", rating: "9.0", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 3." },
  { id: 4, title: "Filme 4", year: "2019", genre: "Aventura", rating: "8.0", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 4." },
  { id: 5, title: "Filme 5", year: "2023", genre: "Terror", rating: "7.0", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 5." },
];

const movies2 = [
  { id: 6, title: "Filme 6", year: "2021", genre: "Ação", rating: "8.5", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 6." },
  { id: 7, title: "Filme 7", year: "2022", genre: "Drama", rating: "7.5", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 7." },
  { id: 8, title: "Filme 8", year: "2020", genre: "Comédia", rating: "9.0", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 8." },
  { id: 9, title: "Filme 9", year: "2019", genre: "Aventura", rating: "8.0", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 9." },
  { id: 10, title: "Filme 10", year: "2023", genre: "Terror", rating: "7.0", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 10." },
];

const movies3 = [
  { id: 11, title: "Filme 11", year: "2021", genre: "Ação", rating: "8.5", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 11." },
  { id: 12, title: "Filme 12", year: "2022", genre: "Drama", rating: "7.5", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 12." },
  { id: 13, title: "Filme 13", year: "2020", genre: "Comédia", rating: "9.0", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 13." },
  { id: 14, title: "Filme 14", year: "2019", genre: "Aventura", rating: "8.0", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 14." },
  { id: 15, title: "Filme 15", year: "2023", genre: "Terror", rating: "7.0", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 15." },
];

export default Home;
