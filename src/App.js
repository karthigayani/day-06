// Day-06-Nov-25
// Problem:1 
import { useState } from 'react';
import './App.css';
import { MovieList } from './MovieList';
function App() {
  return (
    <MovieList/>
    // <Add5 />
  );
}
export default App;

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
