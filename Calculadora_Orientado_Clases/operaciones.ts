import { Operandos } from "./operandos";

export class Operaciones extends Operandos{
    constructor(){
        super()
    }
    public sumar(){
        let resultado = 0;
        for (let i = 0; i < this.listaNumeros.length; i++) {
            resultado += this.listaNumeros[i];
        }
        return resultado;
    }
    public restar(){
        let resultado:number = this.listaNumeros[0];
        for (let i = 1; i < this.listaNumeros.length; i++) {
            resultado -= this.listaNumeros[i];
        }
        return resultado;
    }
    public multiplicar(){
        let resultado:number = 1;
        for (let i = 0; i < this.listaNumeros.length; i++) {
            resultado *= this.listaNumeros[i];
        }
        return resultado;
    }
    public dividir(){
        let bandError:number = 0;
        let i:number = 0;
        let resultado:number = this.listaNumeros[0];
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