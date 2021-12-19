export class primMethod {
  constructor(v, a, col, fil) {
    this.v = [];
    this.a = [];
    this.col = 0;
    this.fil = 0;
  }

  llenarVertices(grid) {
    let contador = 0;
    let contador2 = 0;
    for (let x = 0; x < this.fil; x++) {
      for (let y = 0; y < this.col; y++) {
        debugger;
        if (grid[x][y] === " ") {
          let s1 = x.toString() + " " + y.toString();
          this.v.push(s1);

          let Norte = 0;
          let Sur = 0;
          let Este = 0;
          let Oeste = 0;

          Norte = x - 1;
          Sur = x + 1;
          Este = y + 1;
          Oeste = y - 1;

          if (Norte >= 0) {
            let s2 = Norte.toString() + " " + y.toString();
            let ponderacion = y * y + Norte * Norte;

            if (grid[Norte][y] !== "#") {
              let p = ponderacion.toString();
              let ind1 = contador.toString();
              let ind2 = "-2";
              let aristaN = [ind1, ind2, p, s1, s2];
              this.a.push(aristaN);
              contador2++;
            }
          }
          if (Sur < this.fil) {
            let s2 = Sur.toString() + " " + y.toString();
            let ponderacion = y * y + Sur * Sur;
            if (grid[Sur][y] !== "#") {
              let p = ponderacion.toString();
              let ind1 = contador.toString();
              let ind2 = "-2";
              let aristaN = [ind1, ind2, p, s1, s2];
              this.a.push(aristaN);
              contador2++;
            }
          }
          if (Este < this.col) {
            let s2 = x.toString() + " " + Este.toString();
            let ponderacion = Este * Este + x * x;
            if (grid[x][Este] !== "#") {
              let p = ponderacion.toString();
              let ind1 = contador.toString();
              let ind2 = "-2";
              let aristaN = [ind1, ind2, p, s1, s2];
              this.a.push(aristaN);
              contador2++;
            }
          }
          if (Oeste >= 0) {
            let s2 = x.toString() + " " + Oeste.toString();
            let ponderacion = Oeste * Oeste + x * x;
            if (grid[x][Oeste] !== "#") {
              let p = ponderacion.toString();
              let ind1 = contador.toString();
              let ind2 = "-2";
              let aristaN = [ind1, ind2, p, s1, s2];
              this.a.push(aristaN);
              contador2++;
            }
          }
          contador++;
        }
      }
    }

    for (let x = 0; x < contador2; x++) {
      let indx = this.v.indexOf(this.a[x][4]);
      this.a[x][1] = indx.toString();
    }
  }

  findMinEdge(edges) {
    let min = null;
    for (const edge of edges) {
      min = min ? (parseInt(edge[2]) < parseInt(min[2]) ? edge : min) : edge;
    }
    return min;
  }
  findEdgesIn(srcs, objs, edges, vertices) {
    let edgesBetweenSrcObj = [];
    for (const edge of edges) {
      for (const src of srcs) {
        let srcIndex = vertices.indexOf(src);
        for (const obj of objs) {
          let objIndex = vertices.indexOf(obj);
          if (
            (parseInt(edge[0]) === srcIndex &&
              parseInt(edge[1]) === objIndex) ||
            (parseInt(edge[0]) === objIndex && parseInt(edge[1]) === srcIndex)
          ) {
            edgesBetweenSrcObj.push(edge);
          }
        }
      }
    }

    return edgesBetweenSrcObj;
  }

  compilar(grid) {
    let tree = this.prim(this.a, this.v, this.v[0]);
    for (let x = 0; x < tree.length; x++) {
      let cord1 = tree[x][3].split(" ");
      let cord2 = tree[x][4].split(" ");
      let x1 = parseInt(cord1[0]);
      let x2 = parseInt(cord2[0]);
      let y1 = parseInt(cord1[1]);
      let y2 = parseInt(cord2[1]);
      grid[x1][y1] = "*";
      grid[x2][y2] = "*";
    }

    return grid;
  }

  prim(edges, vertices, startVertex) {
    let infected = [];
    let remained = vertices.slice(0);
    let mstree = [];
    let cur = startVertex;
    while (remained.length !== 1) {
      infected.push(cur);
      remained.splice(remained.indexOf(cur), 1);
      let min = this.findMinEdge(
        this.findEdgesIn(infected, remained, edges, vertices)
      );
      mstree.push(min);
      let x1 = this.fil - 1;
      let y1 = this.col - 2;
      let s1 = x1.toString() + " " + y1.toString();
      let finals1 = min[3].split(" ");
      let finals2 = min[4].split(" ");
      let xx1 = parseInt(finals1[0]) + 1;
      let xx2 = parseInt(finals2[0] + 1);
      let yy1 = parseInt(finals1[1]);
      let yy2 = parseInt(finals2[1]);
      let sf1 = xx1.toString() + " " + yy1.toString();
      let sf2 = xx2.toString() + " " + yy2.toString();

      if (sf1 === s1 || sf2 === s1) {
        let sfinal = (x1 - 1).toString() + " " + y1.toString();

        let aristaF = ["0", "0", "0", sfinal, s1];
        mstree.push(aristaF);
        break;
      }

      cur =
        infected.indexOf(vertices[parseInt(min[0])]) === -1
          ? vertices[parseInt(min[0])]
          : vertices[parseInt(min[1])];
    }

    return mstree;
  }
}
