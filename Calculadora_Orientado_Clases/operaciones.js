import { Operandos } from "./operandos.js";
export class Operaciones extends Operandos {
    constructor() {
        super();
    }
    sumar() {
        let resultado = 0;
        for (let i = 0; i < this.listaNumeros.length; i++) {
            resultado += this.listaNumeros[i];
        }
        return resultado;
    }
    restar() {
        let resultado = this.listaNumeros[0];
        for (let i = 1; i < this.listaNumeros.length; i++) {
            resultado -= this.listaNumeros[i];
        }
        return resultado;
    }
    multiplicar() {
        let resultado = 1;
        for (let i = 0; i < this.listaNumeros.length; i++) {
            resultado *= this.listaNumeros[i];
        }
        return resultado;
    }
    dividir() {
        let bandError = 0;
        let i = 0;
        let resultado = this.listaNumeros[0];
        //verificar que no hayan denominadores iguales a 0
        for (i = 1; i < this.listaNumeros.length; i++) {
            if (this.listaNumeros[i] === 0) {
                bandError = 1;
                i = this.listaNumeros.length;
            }
        }
        if (bandError === 0) {
            for (i = 1; i < this.listaNumeros.length; i++) {
                resultado /= this.listaNumeros[i];
            }
            return resultado;
        }
        else {
            return NaN;
        }
    }
}
