import React, { useState, useEffect } from "react";
import { FilterContainer, Select } from "./styled";

interface Genre {
  id: number;
  name: string;
}

interface GenreFilterProps {
  onGenreChange: (genreId: number) => void;
}

const API_KEY = "50be6e09cf08397cf3a4d661105735ad";
const BASE_URL = "https://api.themoviedb.org/3";

const GenreFilter: React.FC<GenreFilterProps> = ({ onGenreChange }) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
        if (!response.ok) throw new Error("Failed to fetch genres");
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <FilterContainer>
      <Select onChange={(e) => onGenreChange(Number(e.target.value))}>
        <option value="">All Genres</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </Select>
    </FilterContainer>
  );
};

export default GenreFilter;
