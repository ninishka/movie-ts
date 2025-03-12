import React, { useState, useEffect } from 'react';
import {
  MovieImage,
  CardWrap,
  OverviewButton,
  Title
}from './styled'

// Define the shape of a movie
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

// Define props for MovieCard
interface MovieCardProps {
  movie: Movie;
  handleMovieClick: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, handleMovieClick }) => {
  const { title, overview, poster_path } = movie;
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

  const truncateDescription = (description: string): string => {
    return description.length > 100 ? description.slice(0, 100) + "..." : description;
  };

  return (
    <CardWrap onClick={() => handleMovieClick(movie)} style={{ cursor: "pointer" }}>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={title}
      />
      <Title>{title}</Title>
      <OverviewButton
        onClick={(e) => {
          e.stopPropagation(); // Prevents the movie card click event from firing
          handleMovieClick(movie);
        }}
      >
        Overview
      </OverviewButton>
    </CardWrap>
  );
};

export default MovieCard;