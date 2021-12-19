import { Pila } from "./Pila";
export class Iterativo {
  constructor(k) {
    this.k = 0;
  }
  Visit(x, y, grid, pila, mm) {
    const direcciones = {
      arriba: 0,
      derecha: 1,
      abajo: 2,
      izquierda: 3,
    };
    let pil = new Pila();
    var i = 0;
    var vect = [0, 0, 0, 0];
    while (pila) {
      if (pila.estado) {
        if (pila.iter < 4);
        else {
          let objF = pil.SacarPila(pila, x, y);
          pila = objF.pila1;
          x = objF.posx1;
          y = objF.posy2;
          continue;
        }
      } else {
        grid[x][y] = " ";

        var dirs = [
          direcciones.arriba,
          direcciones.derecha,
          direcciones.abajo,
          direcciones.izquierda,
        ];
        for (i = 0; i < 4; ++i) {
          var r = Math.floor(Math.random() * 4);
          var temp = dirs[r];
          dirs[r] = dirs[i];
          dirs[i] = temp;
        }

        pila.estado = true;
        for (i = 0; i < 4; i++) {
          pila.v[i] = dirs[i];
        }
      }
      for (i = pila.iter; i < 4; ++i) {
        var dx = 0;
        var dy = 0;
        switch (pila.v[i]) {
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
            x = x2;
            y = y2;
            pila.iter = i;
            pila = pil.agregarPila(pila, x, y, (i = 0), false, vect);
            break;
          }
        }

        if (i === 3) {
          pila.iter = ++i;
        }
      }
      this.k++;
    }
    return grid;
  }
}
