import React, { FC } from 'react';
import {
  MovieImage,
  CardWrap,
  OverviewButton,
  Title
}from './styled'
import { Movie } from "@/types/types";

// Define props for MovieCard
interface MovieCardProps {
  movie: Movie;
  handleMovieClick: (movie: Movie) => void;
}

const MovieCard: FC<MovieCardProps> = ({ movie, handleMovieClick }) => {
  const { title, poster_path } = movie;
  // const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

  // const truncateDescription = (description: string): string => {
  //   return description.length > 100 ? description.slice(0, 100) + "..." : description;
  // };

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