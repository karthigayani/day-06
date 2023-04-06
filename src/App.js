// Day-06-Nov-25
// Problem:1 
import './App.css';
import { MovieList } from './MovieList';
import { Routes, Route, Link, useParams } from "react-router-dom"; // imported router
import { AddColor } from './AddColor';
import {Navigate } from "react-router-dom"; // imported router
import { useState } from 'react';
import { AddMovie } from './AddMovie';
// function App() {
//   return (
//     <MovieList/>
//     // <Add5 />
//   );
// }

// router setup trial
function App() {
  const [movieList, setMovieList] = useState([
    {
      name: "Vikram",
      poster: "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary: "Members of a black ops team must track and eliminate a gang of masked murderers.",
    },
    {
      name: "RRR",
      poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    },
    {
      name: "Iron man 2",
      poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    },
    {
      name: "No Country for Old Men",
      poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary: "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: "Jai Bhim",
      poster: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
    },
    {
      name: "The Avengers",
      rating: 8,
      summary: "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
    {
      name: "Ratatouille",
      poster: "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    }
  ]);
  // Lifting the state up technique
  return (
    <div>
      {/* step:2 */}
      <ul>
        {/* Anchor tag - navigate the pages with refreshing */}
            {/* <li><a href="/">Home</a></li>
            <li><a href="/movies">Movies</a></li>
            <li><a href="/color-game">Color Game</a></li> */}

        {/* Link tag - navigate the pages without refreshing */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/movies/add">Add Movie</Link></li>
            <li><Link to="/color-game">Color Game</Link></li>
        </ul>
      {/* step:1 */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Navigate replace to="/movies" /> } />
            {/* <Route path="/movies" element={<MovieList/>} /> */}
            <Route path="/movies" element={
            <MovieList movieList={movieList} setMovieList={setMovieList} />
            } 
            />
            <Route path="/color-game" element={<AddColor/>} />
            <Route path="/movies/add" element={
            <AddMovie movieList={movieList} setMovieList={setMovieList} />
            } 
            />

            {/* <Route path="/movies/1" element={<MovieDetails />} /> */}
            {/* : -> converts into variable (Matches any movieid) :- stores value(number) inside the id, id - user-defined variabe */}
            {/* <Route path="/movies/:id" element={<MovieDetails />} /> */}
            <Route path="/movies/:id" element={<MovieDetails movieList={movieList} />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>
  );
}
export default App;

function MovieDetails({ movieList }){
  const {id} = useParams();
  const movie = movieList[id];
  console.log(movieList, movie);

  return(
    <div>
      <iframe 
      width="956" 
      height="538" 
      src="https://www.youtube.com/embed/d9MyW72ELq0" 
      title="Avatar: The Way of Water | Official Trailer" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
      ></iframe>
      <h1>Movie details page of {movie.name}...✨✨</h1>
    </div>
  );
}

function NotFound(){
  return (
    <div className="not-found-container">
      <h2 className="not-found">404 error</h2>
      <img
        src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
        alt="404 Not Found"
      />
    </div>
  );
}

// Example: 1
function Home() {
return(
  <div>
    <h1>Welcome to the movie App 🎉🎉</h1>
  </div>
);
}

// Example: 2
// Refer AddColor.js file






// // useState eg:
// function Add5() {
//   let [num, setNum] = useState(100);
// return (
//   <div>
//     <button onClick={() => setNum(num + 5)} className="Add5-style" >+5</button>
//     <p>{num}</p>
//     {/* <p>{num}</p>
//     <p>{num}</p> */}
//   </div>
// );
// }
