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
      
      {/* step:1 */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList/>} />
            <Route path="/color-game" element={<AddColor/>} />
        </Routes>
    </div>
  );
}
export default App;

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
