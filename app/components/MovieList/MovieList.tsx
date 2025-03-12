"use client";


import MovieCard from  "@/app/components/MovieCard/MovieCard";
import { MovieAppWrap } from './styled'

interface Movie {
  id: number;
  title: string;
  overview: string;
}

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