// Day-06-Nov-25
// Problem:1 
import './App.css';
import { MovieList } from './MovieList';
import { Routes, Route, Link } from "react-router-dom"; // imported router
import { AddColor } from './AddColor';
// function App() {
//   return (
//     <MovieList/>
//     // <Add5 />
//   );
// }

// router setup trial
function App() {
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
            <li><Link to="/color-game">Color Game</Link></li>
        </ul>
      {/* step:1 */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Navigate replace to="/movies" /> } />
            <Route path="/movies" element={<MovieList/>} />
            <Route path="/color-game" element={<AddColor/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    </div>
  );
}
export default App;

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
