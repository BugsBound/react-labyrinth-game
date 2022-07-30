import React from 'react';
import './restart.css';

function Restart({restart}) {
  return (
    <div className="empty">
      <button onClick={restart} className="button">
        RESTART
      </button>
    </div>
  );
}

export default Restart;
