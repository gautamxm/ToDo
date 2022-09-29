import React, { useEffect, useState } from "react";
import Footer from "./footer";

function Traffic() {
    const [currentColor, setCurrentColor] = useState('red');
    const [count, setCount] = useState(0)
  useEffect(() => {
   const interval = setInterval(() => {
    setCurrentColor((prevColor => {
        if (prevColor === 'red') {
            return  'green'
        }
        if (prevColor === 'green') {
            return 'yellow'
        }
        if (prevColor === 'yellow') {
            return 'red'
        }
    }))
    
   }, 3000);
//    return () => {
//     clearInterval(interval)
//    }
  }, []);
//   console.log(' i am re rendering due to solor change see -> ', currentColor)
  return (
    <div id="container">
        <div>{count}</div><button onClick={()=> setCount((prevCount) => prevCount+1)}> incremenr</button>
      <div className={`circle ${currentColor === 'red' ? 'red' : ''}`}></div>
      <div className={`circle ${currentColor === 'yellow' ? 'yellow' : ''}`}></div>
      <div className={`circle ${currentColor === 'green' ? 'green' : ''}`}></div>
    </div>
  );
}

export default Traffic;
