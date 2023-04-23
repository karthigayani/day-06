// Day-05-Nov-24
// clear view

import { useEffect, useState } from 'react'; // named import
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge'; 

export function Counter() {
  
  let [like, setLike] = useState(0);
  let [dislike, setDisLike] = useState(0);

  const incrementLike = () => setLike(like + 1);
  const incrementDisLike = () => setDisLike(dislike + 1);
// useEffect(() => {
//   console.log("The like value is updated", like);
// }); // without dependency array

// useEffect(() => {
//   console.log("The like value is updated", like);
// },[like]); // with dependency array

// useEffect(() => {
//   console.log("The like value is updated", like);
// },[like, dislike]); // with dependency array

  return (
    <div className="Counter">
      <IconButton onClick={incrementLike} color="primary" aria-label="like"> <Badge badgeContent={like} color="primary"> 👍 </Badge> </IconButton>
      <IconButton onClick={incrementDisLike} color="error" aria-label="dislike"> <Badge badgeContent={dislike} color="error"> 👎 </Badge> </IconButton>
    </div>
  );
}