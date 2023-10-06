/*import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);


  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map(movie => {
          return <img
            key={movie.id}
            //onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} />
        })}
      </div>
     
    </div>
  );
}

export default Row;*/

import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
const base_url = "https://image.tmdb.org/t/p/original"
function Row ({ title, fetchUrl, isLargeRow }) {

    const [ movies, setMovies ] = useState([]);
    const [ trailer, setTrailerUrl] = useState("");
    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    
    const opts = {
      height: "390",
      width: "99%",
      playerVars: {
        autoplay: 0,
      }
    }

    const handleClick = (movie) =>{
      if(trailer)
      {
        setTrailerUrl('')
      }
      else{
        movieTrailer(movie?.title || "")
        .then(url =>{
          const urlParams=new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error)=>console.log(error));
      }
    }






    return(
        <div className="row">
             <h2>{title}</h2>
            <div className="row_posters">
            {movies?.map(movie => {
                return <img 
                key={movie.id}
                onClick={()=>handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name} />
            })}
            </div>
            <div style={{ padding: "40px" }}>
        {trailer && <YouTube videoId={trailer} opts={opts} />}
      </div>
        </div>

    );
}
export default Row;