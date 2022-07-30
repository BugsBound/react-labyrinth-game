import React from 'react';

function Box({
               gameStart,
               isWin,
               checkWin,
               box,
               playerStart,
               row,
               col
             }) {
  return (
    <div

      className={`box ${gameStart && "restart start"} 
              ${!gameStart && box === isWin.right && "right"} 
              ${!gameStart && box === isWin.wrong && "wrong"}`}
      onClick={() => gameStart && checkWin(box)}
    >
      {row === playerStart[0] && col === playerStart[1] && gameStart && "⛩"}
      {isWin.status === false &&
        box === isWin.right &&
        !gameStart &&
        "🤭"}
      {isWin.status === false &&
        box === isWin.wrong &&
        !gameStart &&
        "🤬"}
      {isWin.status === true &&
        box === isWin.right &&
        !gameStart &&
        "✅"}
    </div>
  );
}

export default Box;
