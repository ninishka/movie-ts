"use client";

import React, { useState, useEffect, useRef } from 'react';
import MovieList from "@/app/components/MovieList/MovieList";
import Loading from "@/app/components/Loading/Loading";
import MovieCard from "@/app/components/MovieCard/MovieCard";
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";
import Modal from "@/app/components/Modal/Modal";
import Footer from "@/app/components/Footer/Footer";
import Pagination from "@/app/components/Pagination/Pagination";
// import GenreFilter from "@/app/components/GenreFilter/GenreFilter";
import RefExample from "@/app/components/RefExample";


import { Movie } from "@/types/types";




const API_KEY = '50be6e09cf08397cf3a4d661105735ad'; //key needed to authenticate requests to The Movie Database (TMDb) API.//
const BASE_URL = 'https://api.themoviedb.org/3';//base URL for all API requests to TMDb. The different endpoints will be appended to this URL.

export default function HomeContent() {
  const [movies, setMovies] = useState<Movie[]>([]);
  //movies is an array state that stores the list of movies retrieved from the API.
  //setMovies is the function used to update the movies state.
  //initially, movies is an empty array ([]), meaning no movies are displayed when the component first renders.
  const [search, setSearch] = useState<string>("");
  //search is a string state that stores the current value of the search input.
  //setSearch is the function used to update the search state.
  //Initially, search is an empty string (''), meaning the input field starts empty.

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false); 
  // const [selectedGenre, setSelectedGenre] = useState<number | null>(null);


  const movieListRef = useRef<HTMLDivElement | null>(null); 
  const inputRef = useRef<HTMLInputElement>(null);


  // const handleGenreChange = (genreId: number) => {
  //   setSelectedGenre(genreId);
  //   setCurrentPage(1); // Reset to page 1 when changing genre
  // };

  useEffect(() => {
    if (currentPage > 1 && movieListRef.current) {
      movieListRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [currentPage]); 

  useEffect(() => {
    console.log("hui")
  }); 

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => { //ensures that popular movies are fetched when the app loads.
    //The effect runs only once when the component mounts (because the dependency array [] is empty).
    // Fetch popular movies
    const fetchMovies = async () => {
      setLoading(true);
      try {
        // const genreQuery = selectedGenre ? `&with_genres=${selectedGenre}` : ""; 
        const response = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${currentPage}`);
        if (!response.ok) { //This checks if the response is successful (status code 200). If not, an error is thrown.
          throw new Error('Failed to fetch movies');
        }

        const data = await response.json(); //Converts the response into JavaScript object format.

        setMovies((prevMovies) => {
          // Create a Set of movie IDs to filter out duplicates
          const existingMovieIds = new Set(prevMovies.map((movie) => movie.id));
  
          // Filter out the new movies that have already been added
          const newMovies = data.results.filter((movie: Movie) => !existingMovieIds.has(movie.id));
  
          // Combine the previous movies with the new ones, ensuring no duplicates
          return [...prevMovies, ...newMovies];
        }); 

        setTotalPages(data.total_pages); // Set total pages from API response

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [currentPage]);

  //=======//
  //Handling Movie Search
  //This function runs when the user clicks the Search button.
  const handleSearch = async () => {
    
    try {
      const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}`);
      //The query parameter comes from the search state (the user input).
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }
      const data = await response.json(); //Converts the response to JSON format.
      setMovies(data.results); //Updates movies state with data.results, so only the searched movies are displayed.
      
    } catch (error) {
      console.error(error);
    }
  };
//=======//

const handlePageChange = (newPage: number) => {
  if (newPage >= 1 && newPage <= totalPages) {
    setCurrentPage(newPage);
  }
};

//=====//

const handleMovieClick = (movie: Movie) => {
  console.log("Movie clicked:", movie);
  setSelectedMovie(movie);
};
//=======//

const closeModal = () => {
  setSelectedMovie(null);
};

return (
  <div>
    <RefExample />
    <HeaderComponent search={search} setSearch={setSearch} handleSearch={handleSearch} ref={inputRef}/>
    <div ref={movieListRef}>
      {loading ? <Loading /> : <MovieList movies={movies} handleMovieClick={handleMovieClick} />}
    </div>    
    {selectedMovie && <Modal movie={selectedMovie} closeModal={closeModal} />}
    <Pagination 
      currentPage={currentPage} 
      totalPages={totalPages} 
      onPageChange={handlePageChange} 
      /> 
      {/* <GenreFilter onGenreChange={handleGenreChange} /> */}
    <Footer/>
  </div>
);
}
