import { useState } from 'react';
import { Movie } from './Movie';
// import { AddMovie } from './AddMovie';
import {useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { API } from './global'; // importing variable API

// export function MovieList({movieList, setMovieList}) {
//   // const [movieList, setMovieList] = useState([
//   //   {
//   //     name: "Vikram",
//   //     poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   //     rating: 8.4,
//   //     summary: "Members of a black ops team must track and eliminate a gang of masked murderers.",
//   //   },
//   //   {
//   //     name: "RRR",
//   //     poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   //     rating: 8.8,
//   //     summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//   //   },
//   //   {
//   //     name: "Iron man 2",
//   //     poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   //     rating: 7,
//   //     summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//   //   },
//   //   {
//   //     name: "No Country for Old Men",
//   //     poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   //     rating: 8.1,
//   //     summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//   //   },
//   //   {
//   //     name: "Jai Bhim",
//   //     poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   //     summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   //     rating: 8.8,
//   //   },
//   //   {
//   //     name: "The Avengers",
//   //     rating: 8,
//   //     summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   //     poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//   //   },
//   //   {
//   //     name: "Interstellar",
//   //     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   //     rating: 8.6,
//   //     summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//   //   },
//   //   {
//   //     name: "Baahubali",
//   //     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   //     rating: 8,
//   //     summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//   //   },
//   //   {
//   //     name: "Ratatouille",
//   //     poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   //     rating: 8,
//   //     summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//   //   }
//   // ]);
//   return (
//     <div>
//       {/* <AddMovie movieList={movieList} setMovieList={setMovieList}/> */}
//       {/* Lifting the state up technique */}
//       <div className="movie-list">
//         {/* {movieList.map((mv) => (
//           <Movie movie={mv} /> */}

//           {/* {movieList.map((mv, index) => (
//           <Movie key = {index} movie={mv} /> */}
//           {/* Parent -> Child (props) */}
//           {movieList.map((mv, index) => (
//             <div key = {index}>
//             <Movie movie={mv} id={index} />
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// Container (data) & Presentational (view) | Smart (data) & Presentational (view) component
// Smart/Container
// Here Movielist -> Smart/Container component -> It deals with data
// Movie -> Presentational component
export function MovieList(){
  const [movieList, setMovieList] = useState([]);
  
// Step:7
  const getMovies = () => {
    // fetch("https://6404dff940597b65de2c4412.mockapi.io/moviesappapi", { 
    // fetch(`${API}/moviesappapi`, { // replaced variable API
    fetch(`${API}/movies`, { // In mockapi we created the link in the name of "moviesappapi" but in node we generated the link in the name of "movies". Here we are going to connect node with react. So use the name as is it in node.
          method: "GET",
          })
          .then((data) => data.json())
          .then((mvs) => setMovieList(mvs));
  };

// Step:5 - comment it and put it in separate function
  // useEffect(() => {
  //   fetch("https://6404dff940597b65de2c4412.mockapi.io/moviesappapi", { 
  //     method: "GET",
  //    })
  //     .then((data) => data.json())
  //     .then((mvs) => setMovieList(mvs));
  // }, []);

// Step:6
  useEffect(() => getMovies(), []);
  
  // Step:3
  // const deleteMovie = (id) =>{
  //   // console.log("Deleted Movie id", id);
  // };

  // Step:4
  // Deleting the movie & Updating the movieList
  const deleteMovie = (id) => {
    // Delete -> Refresh the data
    // fetch(`https://6404dff940597b65de2c4412.mockapi.io/moviesappapi/${id}`, {
    // fetch(`${API}/moviesappapi/${id}`, { // replaced variable API
    fetch(`${API}/movies/${id}`, { // In mockapi we created the link in the name of "moviesappapi" but in node we generated the link in the name of "movies". Here we are going to connect node with react. So use the name as is it in node.
      method: "DELETE",

      // step:8
     //  }).then((data) => data.json());
  }).then((data) => getMovies());
  };

  // Step:9
  // Navigate to editing the movie 
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="movie-list">
      {movieList.map((mv) => (
            <div key = {mv._id}>
            {/* <Movie movie={mv} id={mv.id} /> */}
            <Movie 
              movie={mv} 
              id={mv._id}
              // Step:1 creating the JSX "deleteButton" and sending props as "deleteButton" to movie (near counter component call)
              //  Applyed renderProps pattern
              // deleteButton={<button>Delete me</button>}
              // step:2
              deleteButton={
              // <button onClick={()=> deleteMovie(mv.id)}>Delete me</button>

              // Styling Delete button using material-ui
              <IconButton 
                // style={{marginLeft:"auto"}}
                sx={{marginLeft:"auto"}}
                onClick={()=> deleteMovie(mv._id)} 
                aria-label="delete"
                color="error"
              >
                <DeleteIcon />
              </IconButton>
            }
            // editmovie.js -> step:1
            editButton={
              <IconButton 
                sx={{marginLeft:"auto"}}
                onClick={()=> navigate(`/movies/edit/${mv._id}`)} 
                aria-label="edit"
                color="secondary"
              >
              <EditIcon />
              </IconButton>
            }
            />
           </div>
       ))}
      </div>
    </div>
  );
} // Using API link
