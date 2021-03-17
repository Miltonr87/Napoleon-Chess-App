import React from 'react';
import './chessboard.css';

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8]
const horizontalAxis = ["a", "b", "c", "d", "f", "g", "h"]

function Chessboard() {
    let board = [];

    for(let i=0; i < horizontalAxis.length; i++) {
        for(let j = 0; j < verticalAxis.length; j++) {
            board.push(<span>
                horizontal square {horizontalAxis[i]} vertical square {verticalAxis[j]}
            </span>)
        }
    }

    return (
    <div id="chessboard">
        {board}
    </div>) 
}

export default Chessboard;