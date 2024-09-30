import React, { useState } from 'react';
import MovieCarousel from './MovieCarousel';
import './App.css'; 
const Recommendations = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
    <div className="recommendations">
      <h2>Recomendações Personalizadas</h2>
      <input
        type="text"
        className="search-bar"
        placeholder="Buscar filmes ou séries..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <MovieCarousel movies={filterMovies(movies2)} detailed={true} />
      <div className="spacer"></div>
    </div>
  );
};

const movies2 = [
  { id: 6, title: "Filme 6", year: "2021", genre: "Ação", rating: "8.5", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 6." },
  { id: 7, title: "Filme 7", year: "2022", genre: "Drama", rating: "7.5", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 7." },
  { id: 8, title: "Filme 8", year: "2020", genre: "Comédia", rating: "9.0", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 8." },
  { id: 9, title: "Filme 9", year: "2019", genre: "Aventura", rating: "8.0", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 9." },
  { id: 10, title: "Filme 10", year: "2023", genre: "Terror", rating: "7.0", image: "https://via.placeholder.com/300x200", description: "Descrição do Filme 10." },
];

export default Recommendations;
