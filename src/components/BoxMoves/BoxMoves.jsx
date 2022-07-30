import React from 'react';
import Arrow from "../Arrow/Arrow";
import './box.css'

function BoxMoves({moves}) {
  return (
    <div className="moves">
      {moves.map((el, i) => (
        <Arrow key={el + i} arrow={el} />
      ))}
    </div>
  );
}

export default BoxMoves;
