import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Navigate, useNavigate } from "react-router-dom";

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer,
    };
    // Local Data
    // setMovieList([...movieList, newMovie]);
    // console.log(newMovie);

    // while adding movie you need to update in your api link.
    // Here you are creating the new movielist. So POST method applied.
    // API Data

    // Steps
    // 1. method - POST
    // 2. body - data & JSON(String)
    // 3. header - JSON

    // fetch("https://6404dff940597b65de2c4412.mockapi.io/moviesappapi", { 
    //       method: "POST",
    //       body: JSON.stringify(newMovie),
    //       headers: { "Content-type": "application/json" },
    //       })
          fetch("https://6404dff940597b65de2c4412.mockapi.io/moviesappapi", { 
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: { "Content-type": "application/json" },
          }).then(() => Navigate('/movies')); // After adding the movie it will navigate to movie page
  };

  return (
    <div className="add-movie-form">
      <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
      <TextField label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
      <TextField label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
      <TextField label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
      <TextField label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} />
      <Button variant="contained" onClick={addMovie}>Add Movie</Button>
    </div>
  );
}
