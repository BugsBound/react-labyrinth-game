export default class Field {
  constructor() {
    this.field = [];
  }

  generate(size) {
    this.field = [...Array(size)].map((el, j) =>
      [...Array(size)].map((el, i) => i + 1 + size * j)
    );
    return this;
  }

  getField() {
    return this.field;
  }

  getNum([x, y]) {
    return this.field[x][y];
  }
}
