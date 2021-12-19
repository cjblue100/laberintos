export class recursivo {
  constructor(k, gridf) {
    k = 0;
    gridf = [];
  }

  Visit(x, y, grid, mm) {
    const direcciones = {
      arriba: 0,
      derecha: 1,
      abajo: 2,
      izquierda: 3,
    };
    this.k++;
    grid[x][y] = " ";
    this.gridf = grid;
    var dirs = [
      direcciones.arriba,
      direcciones.derecha,
      direcciones.abajo,
      direcciones.izquierda,
    ];
    var i = 0;
    for (i = 0; i < 4; ++i) {
      var r = Math.floor(Math.random() * 4);
      var temp = dirs[r];
      dirs[r] = dirs[i];
      dirs[i] = temp;
    }

    for (i = 0; i < 4; ++i) {
      var dx = 0,
        dy = 0;
      switch (dirs[i]) {
        case direcciones.arriba:
          dx = -1;
          break;
        case direcciones.abajo:
          dx = 1;
          break;
        case direcciones.derecha:
          dy = 1;
          break;
        case direcciones.izquierda:
          dy = -1;
          break;
        default:
          break;
      }
      var x2 = x + dx * 2;
      var y2 = y + dy * 2;

      if (mm.IsInBounds(x2, y2)) {
        if (grid[x2][y2] === "#") {
          grid[x2 - dx][y2 - dy] = " ";
          this.gridf = grid;
          this.Visit(x2, y2, grid, mm);
        }
      }
    }
  }
}
