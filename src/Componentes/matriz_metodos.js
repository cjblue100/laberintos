export class matriz_metodo {
  constructor(columnas, filas, k, gridf) {
    this.columnas = 0;
    this.filas = 0;
    this.k = 0;
    this.gridf = [];
  }

  Pedir(f, c) {
    this.filas = parseInt(f);
    this.columnas = parseInt(c);
    if (this.filas % 2 === 0) {
      this.filas += 1;
    }
    if (this.columnas % 2 === 0) {
      this.columnas += 1;
    }
  }

  setearGrid(grid) {
    for (var i = 0; i < this.filas; i++) {
      for (var j = 0; j < this.columnas; j++) {
        grid[i] = grid[i] || [];
        grid[i][j] = "#";
      }
    }
    grid[0][1] = " ";
    grid[this.filas - 1][this.columnas - 2] = " ";
    return grid;
  }

  IsInBounds(x, y) {
    if (x < 1 || x > this.filas - 2) {
      return false;
    }
    if (y < 1 || y > this.columnas - 2) {
      return false;
    }
    return true;
  }

  isSafe(maze, x, y) {
    return (
      x >= 0 &&
      x < this.filas &&
      y >= 0 &&
      y < this.columnas &&
      maze[x][y] === " "
    );
  }

  solveMaze(maze) {
    let sol = maze;

    if (this.solveMazeUtil(maze, 0, 1, sol) === false) {
      return false;
    }
    this.gridf = sol;
    return true;
  }

  solveMazeUtil(maze, x, y, sol) {
    if (x === this.filas - 1 && y === this.columnas - 2 && maze[x][y] === " ") {
      sol[x][y] = "*";
      return true;
    }

    if (this.isSafe(maze, x, y) === true) {
      if (sol[x][y] === "*") return false;

      sol[x][y] = "*";

      if (this.solveMazeUtil(maze, x + 1, y, sol)) return true;

      if (this.solveMazeUtil(maze, x, y + 1, sol)) return true;

      if (this.solveMazeUtil(maze, x - 1, y, sol)) return true;

      if (this.solveMazeUtil(maze, x, y - 1, sol)) return true;

      sol[x][y] = " ";
      return false;
    }

    return false;
  }
}
