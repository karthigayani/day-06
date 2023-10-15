// After applying Form validation
// import { useState } from 'react';  // Step:15 comment useState 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik"; // Step:3
import * as yup from 'yup'; // Step:12
import { API } from './global'; // importing variable API
// Validations -- on Add movie
// name - required
// poster - min 4 chars, required
// rating - 0 - 10, required
// summary - min 20 chars, required
// trailer -min 4, required

export function AddMovie({ movieList, setMovieList }) {
  // step:5 comment the useState
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();
// Step:14 defining validationSchema
  const movieValidationSchema = yup.object({
      // name: yup.string().required().min(1),
      // poster: yup.string().required().min(4),
      // rating: yup.number().required().min(0).max(10),
      // summary: yup.string().required().min(20),
      // trailer: yup.string().required().min(4).url(),
      
// Step:19 customizing the message
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
  
  // Step:2 Adding useFormik hook
  const {handleSubmit, values, handleChange,handleBlur,touched,errors }= useFormik({
    initialValues:{
      // Step:8 Changing the particulars
      // email: "",
      // password: "", 
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    // Step:4 comment it. Adding ValidationSchema is last step.
    // validationSchema: movieValidationSchema,

    // Step:13 Adding validationSchema
    validationSchema: movieValidationSchema,

    // Step:17 calling addMovie to add the newmovie details to the movieList through fetch.
    // Here You are calling addMovie and renaming the values to newMovie for better understanding.
    // onSubmit: (values) => {
    //   console.log("Form values: ", values);
    // },
    onSubmit: (newMovie) => {
      console.log("Form values: ", newMovie);
      addMovie(newMovie);
    },
  });

  
  // step:6 comment addMovie part. bcs it is the final step.
  // const addMovie = () => {
  //   const newMovie = {
  //     name: name,
  //     poster: poster,
  //     rating: rating,
  //     summary: summary,
  //     trailer: trailer,
  //   };
  //         fetch("https://6404dff940597b65de2c4412.mockapi.io/moviesappapi", { 
  //           method: "POST",
  //           body: JSON.stringify(newMovie),
  //           headers: { "Content-type": "application/json" },
  //         }).then(() => Navigate('/movies')); // After adding the movie it will navigate to movie page
  // };

// Step:18 uncommend the addMovie part to add newMovie to the movieList.
// onSubmit sends newMovie to addMovie 
  const addMovie = (newMovie) => {
    // const addMovie = () => {
  // No need to construct newMovie bcs, formik itself creating it.
    // const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer,
    // };
          // fetch("https://6404dff940597b65de2c4412.mockapi.io/moviesappapi", { 
          // fetch(`${API}/moviesappapi`, { // replaced variable API
          fetch(`${API}/movies`, { // In mockapi we created the link in the name of "moviesappapi" but in node we generated the link in the name of "movies". Here we are going to connect node with react. So use the name as is it in node.
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: { "Content-type": "application/json" },
          }).then(() => navigate('/movies')); // After adding the movie it will navigate to movie page
  };

  return (
    // Step:9 converting div wrap to form wrap and adding `onSubmit={handleSubmit}`
    <form className="add-movie-form" onSubmit={handleSubmit} >
      {/* <div className="add-movie-form"></div> */}
      <TextField 
        label="Name" 
        variant="outlined" 
        // Step:1
        // onChange={(event) => setName(event.target.value)} 
        value={values.name} //Step:7 Changing the particulars
        name="name" //Step:7 Changing the particulars
        onChange={handleChange}
        onBlur={handleBlur}
        // Step:20 Material ui property added for styling the error box and msg. So comment the touch property
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}
      />
      {/* {touched.name && errors.name ? errors.name : null }  */}
      {/* Step:16 touch property added for to display error*/}

      <TextField 
        label="Poster" 
        variant="outlined" 
        // Step:1
        // onChange={(event) => setPoster(event.target.value)} 
        value={values.poster} //Step:7 Changing the particulars
        name="poster" //Step:7 Changing the particulars
        onChange={handleChange}
        onBlur={handleBlur}
        // Step:20 Material ui property added for styling the error box and msg. So comment the touch property
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : null}
      />
      {/* {touched.poster && errors.poster ? errors.poster : null } */}
      {/* Step:16 touch property added for to display error*/}

      <TextField 
        label="Rating" 
        variant="outlined"
        // Step:1 
        // onChange={(event) => setRating(event.target.value)}
        value={values.rating} //Step:7 Changing the particulars
        name="rating" //Step:7 Changing the particulars
        onChange={handleChange}
        onBlur={handleBlur} 
        // Step:20 Material ui property added for styling the error box and msg. So comment the touch property
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : null}
      />
      {/* {touched.rating && errors.rating ? errors.rating : null } */}
      {/* Step:16 touch property added for to display error*/}

      <TextField 
        label="Summary" 
        variant="outlined" 
        // Step:1
        // onChange={(event) => setSummary(event.target.value)} 
        value={values.summary} //Step:7 Changing the particulars
        name="summary" //Step:7 Changing the particulars
        onChange={handleChange}
        onBlur={handleBlur}
        // Step:20 Material ui property added for styling the error box and msg. So comment the touch property
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary : null}
      />
      {/* {touched.summary && errors.summary ? errors.summary : null } */}
      {/* Step:16 touch property added for to display error*/}

      <TextField 
        label="Trailer" 
        variant="outlined"
        // Step:1 
        // onChange={(event) => setTrailer(event.target.value)} 
        value={values.trailer} //Step:7 Changing the particulars
        name="trailer" //Step:7 Changing the particulars
        onChange={handleChange}
        onBlur={handleBlur}
        // Step:20 Material ui property added for styling the error box and msg. So comment the touch property
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer : null}
      />
      {/* {touched.trailer && errors.trailer ? errors.trailer : null } */}
      {/* Step:16 touch property added for to display error*/}

      <Button 
        variant="contained" 
        type="submit" // Step:10 Added type submit 
        // onClick={addMovie} // Step:11 Removing onClick - because it added movie directly without validation. So if you don't put onclick handSubmit will trigger, hence validation taking place. 
      >Add Movie
      </Button>
    {/* </div> */}
    </form> // Step:9 converting div wrap to form wrap.
  );
}




// // Before applying form validation.
// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import {Navigate, useNavigate } from "react-router-dom";

// export function AddMovie({ movieList, setMovieList }) {
//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");
//   const [trailer, setTrailer] = useState("");

//   const navigate = useNavigate();

//   const addMovie = () => {
//     const newMovie = {
//       name: name,
//       poster: poster,
//       rating: rating,
//       summary: summary,
//       trailer: trailer,
//     };
//     // Local Data
//     // setMovieList([...movieList, newMovie]);
//     // console.log(newMovie);

//     // while adding movie you need to update in your api link.
//     // Here you are creating the new movielist. So POST method applied.
//     // API Data

//     // Steps
//     // 1. method - POST
//     // 2. body - data & JSON(String)
//     // 3. header - JSON

//     // fetch("https://6404dff940597b65de2c4412.mockapi.io/moviesappapi", { 
//     //       method: "POST",
//     //       body: JSON.stringify(newMovie),
//     //       headers: { "Content-type": "application/json" },
//     //       })
//           fetch("https://6404dff940597b65de2c4412.mockapi.io/moviesappapi", { 
//             method: "POST",
//             body: JSON.stringify(newMovie),
//             headers: { "Content-type": "application/json" },
//           }).then(() => Navigate('/movies')); // After adding the movie it will navigate to movie page
//   };

//   return (
//     <div className="add-movie-form">
//       <TextField label="Name" variant="outlined" onChange={(event) => setName(event.target.value)} />
//       <TextField label="Poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} />
//       <TextField label="Rating" variant="outlined" onChange={(event) => setRating(event.target.value)} />
//       <TextField label="Summary" variant="outlined" onChange={(event) => setSummary(event.target.value)} />
//       <TextField label="Trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} />
//       <Button variant="contained" onClick={addMovie}>Add Movie</Button>
//     </div>
//   );
// }

