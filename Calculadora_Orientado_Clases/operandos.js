export class Operandos {
    constructor() {
        this.listaNumeros = [];
    }
    setOperando(nuevoNumero) {
        this.listaNumeros.push(nuevoNumero);
    }
    getOperandos() {
        return this.listaNumeros;
    }
    inicializarOperandos() {
        this.listaNumeros = [];
    }
}
