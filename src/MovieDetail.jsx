import React from 'react';


const MovieCarousel = ({ movies, detailed }) => {
  return (
    <div className="carousel">
      {movies.map(movie => (
        <div className="carousel-item" key={movie.id}>
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
          {detailed && (
            <>
              <p>{movie.description}</p>
              <button className="view-more-button">Ver Mais</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default MovieCarousel;