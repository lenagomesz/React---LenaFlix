import React from 'react';

const MovieCarousel = ({ movies, detailed }) => {
    return (
        <div className="carousel">
            {movies.map(movie => (
                <div className="carousel-item" key={movie.id}>
                    <img src={movie.image} alt={movie.title} className="movie-image" />
                    <h3>{movie.title}</h3>
                    {detailed && (
                        <>
                            <p>Ano: {movie.year}</p>
                            <p>Gênero: {movie.genre}</p>
                            <p>Avaliação: {movie.rating}</p>
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
