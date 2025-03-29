

// const API_KEY = '50be6e09cf08397cf3a4d661105735ad'; //key needed to authenticate requests to The Movie Database (TMDb) API.//
// const BASE_URL = 'https://api.themoviedb.org/3';//base URL for all API requests to TMDb. The different endpoints will be appended to this URL.

//   //=======//
//   //Handling Movie Search
//   //This function runs when the user clicks the Search button.
//   export const handleSearch = async ({ search, setMovies }) => {
//     try {
//       const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${search}`);
//       //The query parameter comes from the search state (the user input).
//       if (!response.ok) {
//         throw new Error('Failed to fetch search results');
//       }
//       const data = await response.json(); //Converts the response to JSON format.
//       setMovies(data.results); //Updates movies state with data.results, so only the searched movies are displayed.
      
//     } catch (error) {
//       console.error(error);
//     }
//   };
//=======//