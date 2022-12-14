import React, { useState, useEffect } from 'react'
import axios from '../../utils/axios.js'
import requests from '../../utils/requests.js';

import './Row.css';

const Row = ({ title, fetchURL, isLargeRow = false }) => {
  const base_url = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData () {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request
    }

    fetchData();
  }, [fetchURL])
  return (
    <div className="row">
      <h2>
        { title }  
      </h2>
      <div className="row__posters">
        {
          movies.map((movie, i) => ((isLargeRow && movie.poster_path ) ||
            (!isLargeRow && movie.backdrop_path)
          ) && (
          <img key={movie.id} className={`row__poster ${isLargeRow && 'row__posterLarge'}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />)
          )
        }
      </div>
    </div>
  )
}

export default Row