import "./styles.css";
import React, { useEffect, useState } from "react";

import BoxMoves from "./components/BoxMoves/BoxMoves";
import Restart from "./components/Restart/Restart";
import Row from "./components/Row/Row";
import Box from "./components/Box/Box";

import Field from "./game-core/field";
import Player from "./game-core/player";
import Game from "./game-core/game";

const SIZE = 3;

export default function App() {
  const fieldController = new Field();
  const player = new Player(SIZE);
  const game = new Game(player, fieldController);

  const [playerStart, setPlayerStart] = useState([0, 0]);

  const [gameStart, setGameStart] = useState(true);
  const [isWin, setIsWin] = useState({});
  const [field, setField] = useState(game.generateField());
  const [moves, setMoves] = useState([]);
  const [winPos, setWinPos] = useState([]);
  const [choise, setChoise] = useState(false);

  useEffect(() => {
    setPlayerStart(game.startPosition());
    game.calculate(setMoves, setChoise);
    setWinPos(game.player.getPosition());
  }, []);

  function checkWin(num) {
    if (choise) {
      const win = fieldController.getNum(winPos);
      if (num === win) {
        setIsWin({
          status: true,
          right: win
        });
      } else {
        setIsWin({
          status: false,
          right: win,
          wrong: num
        });
      }
      setGameStart(false);
    }
  }

  function restart() {
    game.restart(setMoves, setPlayerStart, setChoise);
    setField((prev) => [...prev]);
    setGameStart(true);
    setIsWin({
      status: null,
      wrong: null,
      right: null
    });
    setWinPos(game.player.getPosition());
  }

  return (
    <>
      {!gameStart && <Restart restart={restart} />}
      {field.map((el, i) => (
        <Row key={i + 10} >
          {el.map((box, j) => (
            <Box
              key={el + i + j}
              gameStart={gameStart}
              isWin={isWin}
              checkWin={checkWin}
              box={box}
              playerStart={playerStart}
              row={i}
              col={j}
            />
          ))}
        </Row>
      ))}
      <BoxMoves moves={moves} />
    </>
  );
}
