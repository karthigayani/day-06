import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
export function Movie({ movie }) {
  
  const ratingStyles = { 
    color: movie.rating >= 8.5 ? "green" : "red"
  }; 
  const [show, setShow] = useState(true);

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-specs">
        {/* step:2 added toggle summary */}
        <h2 className="movie-name">{movie.name} <IconButton 
          color="primary"
          onClick = {() => setShow(!show)}
          aria-label="Toggle summary">
          {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
          </IconButton>
        </h2>
        <p style={ratingStyles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}