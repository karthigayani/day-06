import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// export function MovieDetails({ movieList }) {
  export function MovieDetails() {
  const { id } = useParams();
  // const movie = movieList[id];
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(`https://6404dff940597b65de2c4412.mockapi.io/moviesappapi/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, []);
  
  // console.log(movieList, movie);
  console.log(movie);
  
  const ratingStyles = {
    color: movie.rating >= 8.5 ? "green" : "red"
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe
        width="100%"
        height="800px"
        src={movie.trailer}
        title="Avatar: The Way of Water | Official Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={ratingStyles} className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button variant="contained" onClick={() => navigate(-1)} startIcon={<KeyboardBackspaceIcon />}>Back</Button>
      </div>
    </div>
  );
}

// ******************************************************* //