import { Nodo } from "./Nodo";
export class Pila {
  agregarPila(pila, posx, posy, i, estate, dir) {
    var nuevo = new Nodo(0, 0, 0, false, [], null);
    nuevo.x = posx;
    nuevo.y = posy;
    nuevo.iter = i;
    nuevo.estado = estate;
    for (var j = 0; j < 4; j++) {
      nuevo.v[j] = dir[j];
    }
    nuevo.siguiente = pila;
    pila = nuevo;

    return pila;
  }

  SacarPila(pila, posx, posy) {
    let aux = pila;
    posx = aux.x;
    posy = aux.y;
    pila = aux.siguiente;

    const objFinal = {
      posx1: posx,
      posy2: posy,
      pila1: pila,
    };
    return objFinal;
  }
}
