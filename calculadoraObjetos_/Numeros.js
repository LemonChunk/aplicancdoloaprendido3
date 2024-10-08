export class Numeros {
    constructor() {
        this.listaNumeros = [];
    }
    setNumero(nuevoNumero) {
        this.listaNumeros.push(nuevoNumero);
    }
    getNumeros() {
        return this.listaNumeros;
    }
    inicializarLista() {
        this.listaNumeros = [];
    }
}
