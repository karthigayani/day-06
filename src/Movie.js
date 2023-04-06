import { useState } from 'react';
import { Counter } from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

export function Movie({ movie , id }) {
  
  const ratingStyles = { 
    color: movie.rating >= 8.5 ? "green" : "red"
  }; 
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  return (
    <Card className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}
            <IconButton
              color="primary"
              onClick = {() => setShow(!show)}
              aria-label="Toggle summary">
              {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
            </IconButton>
            <IconButton
              color="primary"
              onClick = {() => navigate(`/movies/${id}`)}
              aria-label="Toggle summary">
              <InfoIcon/>
            </IconButton>
          </h2>
          <p style={ratingStyles} className="movie-rating">⭐{movie.rating}</p>
        </div>
        {show ? <p className="movie-summary">{movie.summary}</p> : null}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
    </Card>
  );
}