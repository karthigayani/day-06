// Sub-function(component) Step-1
import { useState } from 'react';
export function AddColor(){
  const [color, setColor] = useState("orange");
  const styles = {background:color};
  // step-3 comment this line
  // const colorList = ["crimson","orangered","orange","pink"]; 
  const [colorList, setColorList] = useState([    // step-4 adding useState
    "crimson",
    "orangered",
    "orange",
    "pink"
  ]);
  return(
    <div>
      <input
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color"
        value={color}
      />
      {/* step-8 : onclick logic -> copy existing colorList & add new color to it. (Applying ES6 feature - spread operator)  */}
      {/* <button>Add Color</button> */}
      <button onClick={() => setColorList([...colorList, color])}>Add Color
      {/* <button onClick={() => setColorList([...colorList, color, color])}> */}
      {/* AddColor function -> color variable*/}
      {/* Flow: (1)Spread operator copies the existing colorList ->  (2)adding new color to the colorList -> (3)setColorList updating the new colorList*/}
      </button>
      {/* <ColorBox />
      <ColorBox />
      <ColorBox /> */}
      {/* step:5 */}
      {/* {colorList.map((clr) => (
        <ColorBox color={clr}/>
      ))} */}
      {/* To Overcome warning put index for key*/}
      {colorList.map((clr, index) => (
        <ColorBox key={index} color={clr}/>
      ))}
    </div>
  );
}
// Sub-function(component) Step-2
function ColorBox({color}){   // Step -6 Object destructuring
  const styles = {
    width: "250px",
    height:"25px",
    // background: "orange",
    background: color,   // Step -7 Applying props{color} instead of orange
    marginTop:"10px"
  }
  return <div 
            style={styles}>
        </div>
}


// colorList flow : colorList -> clr -> (clr->color) -> color goes as props of colorBox -> color assigned to background.
// Flow: when you `type` -> onChange triggered and fire `setColor` -> In setColor we gaved the typed value (event.target.value) -> So it updates the value for color.
// Why form needed ?
// If you want to add/submit any data to the website, we need form.
// Immutability concept -> Copying the existing data and make changes without disturbing the old one.(Virtual DOM concept)


// When you use mapping you will always get a warning message in console : Warning: Each child in a list should have a unique "key" prop.
// How to overcome this warning ?

// To avoid this, change your code,
// from:
// {colorList.map((clr) => (
//   <ColorBox color={clr}/>
//   ))}
// To:
// {colorList.map((clr,index) => (
//   <ColorBox key={index} color={clr}/>
// ))}

// What is the use of putting key?
// key helps to quickly compare the changes b/w virtual DOM and real DOM
// If you don't mention key you will not get the benifits of virtual DOM.
// why we put index? Bcs every array element should have a unique key called index.
