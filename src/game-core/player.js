export default class Player {
  constructor(size) {
    this.size = size;
    this.xPosition = Math.floor(Math.random() * this.size);
    this.yPosition = Math.floor(Math.random() * this.size);
  }

  move(direction) {
    switch (direction) {
      case "left":
        this.yPosition -= 1;
        break;
      case "right":
        this.yPosition += 1;
        break;
      case "up":
        this.xPosition -= 1;
        break;
      case "down":
        this.xPosition += 1;
        break;
      default:
        console.log("...");
    }
  }

  getPosition() {
    return [this.xPosition, this.yPosition];
  }

  newPosition() {
    this.xPosition = Math.floor(Math.random() * this.size);
    this.yPosition = Math.floor(Math.random() * this.size);
  }
}
