import React from "react";
import { matriz_metodo } from "./matriz_metodos";
import { primMethod } from "./primMethod";
import { recursivo } from "./recursivo";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
export default function Prim() {
  let recursion = new recursivo(0);
  let prim = new primMethod([], [], 0, 0);
  const [filas, setFilas] = React.useState(0);
  const [columnas, setColumnas] = React.useState(0);
  const [meth] = React.useState(new matriz_metodo(0, 0, 0));
  const [grid, setGrid] = React.useState([]);
  const [usado, setUsado] = React.useState(false);
  const [tiempo1, setTiempo1] = React.useState(0);
  const [tiempo2, setTiempo2] = React.useState(0);
  function obtenerInput() {
    setUsado(false);
    setTiempo2(0);
    meth.Pedir(filas, columnas);
    let list = [];
    list = meth.setearGrid(list);
    let start = Date.now();
    recursion.Visit(1, 1, list, meth);
    let end = Date.now();
    let total = end - start;
    setTiempo1(total);
    setGrid(recursion.gridf);
  }
  function resolver() {
    setUsado(true);
    let start = Date.now();
    meth.solveMaze(grid);
    let end = Date.now();
    let total = end - start;
    setTiempo2(total);
  }

  function resolverPrim() {
    setUsado(true);
    prim.col = meth.columnas;
    prim.fil = meth.filas;
    prim.llenarVertices(grid);
    let start = Date.now();
    prim.compilar(grid);
    let end = Date.now();
    let total = end - start;
    setTiempo2(total);
  }
  const handleFilas = (e) => {
    setFilas(e.target.value);
  };
  const handleColumnas = (e) => {
    setColumnas(e.target.value);
  };
  return (
    <div style={{ marginLeft: "100px", marginRight: "100px", color: "Red" }}>
      <h1>Laberinto Recursivo</h1>

      <Grid container spacing={0}>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <TextField
            id="standard-basic"
            label="Columnas"
            variant="standard"
            onChange={(e) => handleColumnas(e)}
            value={columnas}
            type="number"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="standard-basic"
            label="Filas"
            variant="standard"
            onChange={(e) => handleFilas(e)}
            value={filas}
            type="number"
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <br></br>
      <Grid container spacing={0}>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <TextField
            id="standard-basic"
            label="Tiempo Generacion"
            variant="standard"
            onChange={(e) => handleColumnas(e)}
            value={tiempo1}
            InputProps={{
              endAdornment: <InputAdornment position="end">ms</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="standard-basic"
            label="Tiempo Resolucion"
            variant="standard"
            onChange={(e) => handleColumnas(e)}
            value={tiempo2}
            InputProps={{
              endAdornment: <InputAdornment position="end">ms</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={12} style={{ margin: "10px" }}>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            onClick={obtenerInput}
          >
            GENERAR
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            onClick={resolver}
            disabled={usado}
          >
            RESOLVER
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            onClick={resolverPrim}
            disabled={usado}
          >
            PRIM
          </Button>
        </Grid>
      </Grid>

      {grid.map((lineas, index1) => {
        return (
          <div key={index1 + "level1.2"}>
            {lineas.map((columnas, index2) => {
              return columnas === "#" ? (
                <span key={index2 + "level2.2"}>
                  <img
                    alt=""
                    src={
                      require("/Users/gabrieladiazr/Documents/GitHub/laberintos/src/Componentes/pared.png")
                        .default
                    }
                    width="5%"
                  ></img>
                </span>
              ) : columnas === "*" ? (
                <span key={index2 + "level2.2"}>
                  <img
                    alt=""
                    src={
                      require("/Users/gabrieladiazr/Documents/GitHub/laberintos/src/solucion.png")
                        .default
                    }
                    width="5%"
                  ></img>
                </span>
              ) : (
                <span key={index2 + "level2.2"}>
                  <img
                    alt=""
                    src={
                      require("/Users/gabrieladiazr/Documents/GitHub/laberintos/src/Componentes/camino.png")
                        .default
                    }
                    width="5%"
                  ></img>
                </span>
              );
            })}
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
