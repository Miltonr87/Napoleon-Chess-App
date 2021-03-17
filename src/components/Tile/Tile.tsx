import React from 'react';
import "./tile.css";

interface Props {
    numberColumns: number;
}

function Tile({ numberColumns } : Props) {
   
   if(numberColumns % 2 === 0) {
    return (<div className="tile dark-tile"> <img src="assets/images/dark/queen.svg" alt="piece" /></div>)
   } else {
   return (<div className="tile white-tile"></div>)
    }
}

export default Tile;