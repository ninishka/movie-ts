"use client";

import React, { useState, useEffect } from 'react';
import MovieList from "@/app/components/MovieList/MovieList";
import MovieCard from "@/app/components/MovieCard/MovieCard";
import HeaderComponent from "@/app/components/HeaderComponent/HeaderComponent";
import Modal from "@/app/components/Modal/Modal";



const API_KEY = '50be6e09cf08397cf3a4d661105735ad'; //key needed to authenticate requests to The Movie Database (TMDb) API.//
const BASE_URL = 'https://api.themoviedb.org/3';//base URL for all API requests to TMDb. The different endpoints will be appended to this URL.

interface Movie {
  id: number;
  title: string;
  overview: string;
}

export default function HomeContent() {
  const [movies, setMovies] = useState<Movie[]>([]);
  //movies is an array state that stores the list of movies retrieved from the API.
  //setMovies is the function used to update the movies state.
  //initially, movies is an empty array ([]), meaning no movies are displayed when the component first renders.
  const [search, setSearch] = useState<string>("");
  //search is a string state that stores the current value of the search input.
  //setSearch is the function used to update the search state.
  //Initially, search is an empty string (''), meaning the input field starts empty.

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => { //ensures that popular movies are fetched when the app loads.
    //The effect runs only once when the component mounts (because the dependency array [] is empty).
    // Fetch popular movies
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`); //sends a GET request 
        if (!response.ok) { //This checks if the response is successful (status code 200). If not, an error is thrown.
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json(); //Converts the response into JavaScript object format.
        setMovies(data.results); //Updates the movies state with the fetched movie list.
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

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
    <HeaderComponent search={search} setSearch={setSearch} handleSearch={handleSearch} />
    <MovieList movies={movies} handleMovieClick={handleMovieClick} />
    {selectedMovie && <Modal movie={selectedMovie} closeModal={closeModal} />}
  </div>
);
}
