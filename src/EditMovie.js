// export function EditMovie() {
//   return (
//     <div>
//       <h1>Edit_Your_MovieDetails</h1>
//     </div>
//   );
// }

// editmovie.js -> Step:3
// Copy all the AddMovie.js file details and paste it.
// Change EditMovie function name instead of AddMovie
// Also change the submit button name "Add Movie" to "Save"

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useNavigate , useParams } from "react-router-dom";
import { useFormik } from "formik"; 
import * as yup from 'yup'; 
import React, {useState, useEffect} from 'react'

const movieValidationSchema = yup.object({
  name: yup
  .string()
  .required("A cool name is in need 😉")
  .min(1,"Need a bigger Movie name 🤩"),
  poster: yup
  .string()
  .required("A cool poster is in need 😉")
  .min(4,"Need a bigger Poster address 🤩"),
  rating: yup
  .number()
  .required("A cool rating is in need 😉")
  .min(0,"Need a bigger Rating 🤩")
  .max(10,"You have already reached the maximum Range 🤩"),
  summary: yup
  .string()
  .required("A cool summary is in need 😉")
  .min(20,"Need a bigger Summary 🤩"),
  trailer: yup
  .string()
  .required("A cool trailer is in need 😉")
  .min(4,"Need a bigger Trailer 🤩")
  .url(),
});

// con/presentational
export function EditMovie() {
  const { id } = useParams(); // id get from url
  const [movie, setMovie] = useState(null); // Declaring movie, setMovie
  useEffect(() => {
    fetch(`https://6404dff940597b65de2c4412.mockapi.io/moviesappapi/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
      // .then((mv) => console.log(mv));
  }, []); // fetching the particular movie for the id and setting the movie details.
  
  console.log(movie);

  return <div>
    {/*  editmovie.js -> step:4 */}
    {movie ? <EditFormMovie movie={movie}/> : "Loading..."}
  </div>
} 

// Here we spilted the function into datahandling part and datadisplaying part.

function EditFormMovie({movie}){
  const {handleSubmit, values, handleChange,handleBlur,touched,errors }= 
  useFormik({
    initialValues:{
      name: movie.name,
      poster: movie.poster,
      rating: movie.rating,
      summary: movie.summary,
      trailer: movie.trailer,
    },
    validationSchema: movieValidationSchema,
    onSubmit: (updatedMovie) => {
      console.log("Form values: ", updatedMovie);
      editMovie(updatedMovie);
    },
  });

  const navigate = useNavigate();
  
  const editMovie = (updatedMovie) => {
    // editmovie.js -> step:5
    // Steps
    // 1. method - PUT & id
    // 2. body - data & JSON (string)
    // 3. header - JSON
    // JS -> python/JAVA / PHP (string) [dictionary]
    // JSON / XML

    fetch(`https://6404dff940597b65de2c4412.mockapi.io/moviesappapi/${movie.id}`, { 
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate('/movies')); 
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit} >
      <TextField 
        label="Name" 
        variant="outlined" 
        value={values.name} 
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}
      />
      
      <TextField 
        label="Poster" 
        variant="outlined"  
        value={values.poster} 
        name="poster" 
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : null}
      />
      
      <TextField 
        label="Rating" 
        variant="outlined"       
        value={values.rating} 
        name="rating" 
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : null}
      />
      
      <TextField 
        label="Summary" 
        variant="outlined"
        value={values.summary} 
        name="summary" 
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary : null}
      />
      
      <TextField 
        label="Trailer" 
        variant="outlined" 
        value={values.trailer} 
        name="trailer" 
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer : null}
      />
      
      <Button 
        color="success"
        variant="contained" 
        type="submit"
      >Save
      </Button>
    </form>
  );
}



  