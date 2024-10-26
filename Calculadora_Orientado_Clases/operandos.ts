export class Operandos{
    protected listaNumeros:number[]
    public constructor() {
        this.listaNumeros = [];
    }
    public setOperando(nuevoNumero:number){
        this.listaNumeros.push(nuevoNumero);
    }
    public getOperandos() {
        return this.listaNumeros;
    }
    public inicializarOperandos() {
        this.listaNumeros = [];
    } 
}