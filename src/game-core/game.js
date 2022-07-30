export default class Game {
  constructor(player, field) {
    this.player = player;
    this.field = field;
    this.moves = ["left", "right", "up", "down"];
  }

  generateField() {
    this.field.generate(this.player.size);
    return this.field.getField();
  }

  startPosition() {
    const start = this.player.getPosition();
    return start;
  }

  calculate(newState, setChoise) {
    setChoise(false);
    for (let i = 0; i < 10; i++) {
      const variables = this.moves.filter(
        (el) =>
          (el === "left" && this.player.yPosition !== 0) ||
          (el === "right" && this.player.yPosition !== this.player.size - 1) ||
          (el === "up" && this.player.xPosition !== 0) ||
          (el === "down" && this.player.xPosition !== this.player.size - 1)
      );
      const randIndex = Math.floor(Math.random() * variables.length);
      const move = variables[randIndex];
      this.player.move(move);
      setTimeout(() => {
        newState((prev) => [...prev, move]);
        if (i + 1 === 10) {
          setChoise(true);
        }
      }, 1000 * i);
    }
  }

  restart(setArrows, setPlayerStart, setChoise) {
    this.player.newPosition();
    setPlayerStart(this.player.getPosition());
    setArrows([]);
    this.calculate(setArrows, setChoise);
  }
}
