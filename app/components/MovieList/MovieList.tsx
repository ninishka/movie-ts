"use client";


import MovieCard from  "@/app/components/MovieCard/MovieCard";
import { MovieAppWrap } from './styled'
import { Movie } from "@/types/types";

// Define the props expected by MovieList
interface MovieListProps {
  movies: Movie[];
  handleMovieClick: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, handleMovieClick }) => {
  return (
    <MovieAppWrap>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} handleMovieClick={handleMovieClick} />
      ))}
    </MovieAppWrap>
  );
};

export default MovieList;