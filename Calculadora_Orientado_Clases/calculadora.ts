import { FuncionesAuxiliares } from "./funcionesAuxiliares";
import { Operaciones } from "./operaciones"

export class Calculadora extends Operaciones{
    private aux: FuncionesAuxiliares;
    private resultado:number;
    constructor(){
        super();
        this.aux= new FuncionesAuxiliares();
        this.resultado=0;
    }
    public mostrarResultado():void{
        console.log(`= ${this.resultado}`);
    }
    public ingresarNumeros():void{
        let alerta:number= 0, nroOperando:number= 1, seguir:string = "-1", ingreso:number;
        do {
            alerta = 0;
            do {
                if (alerta != 0) {
                    console.log("ERROR: ingresó algún valor inválido, ingrese nuevamente...");
                }
                console.log(`Ingrese el operando número ${nroOperando}`);
                ingreso = this.aux.solicitarNumero();
                alerta++;
            } while (!this.aux.esNumero(ingreso));
            this.setOperando(ingreso);
            if (nroOperando > 1) {
                console.log("Desea continuar añadiendo operandos al cálculo?\n1. Continuar\n2. Pasar al cálculo");
                seguir = this.aux.solicitarString();
                while (seguir != "1" && seguir != "2") {
                    console.log("Ingresó un valor inválido, ingrese nuevamente...");
                    seguir = this.aux.solicitarString();
                }
            }
            nroOperando++;
        } while (seguir != "2");
    }
    public realizarSuma():void{
        console.log("Seleccionaste realizar una suma.");
        this.ingresarNumeros();
        process.stdout.write("Cálculo: ");
        this.resultado=this.sumar();
        for (let i:number = 0; i < this.listaNumeros.length; i++) {
            process.stdout.write(`${this.listaNumeros[i]}`);
            if (i != this.listaNumeros.length - 1) {
                process.stdout.write("+");
            }
        }
        this.mostrarResultado();
    }
    public realizarResta():void{
        console.log("Seleccionaste realizar una resta.");
        this.ingresarNumeros();
        process.stdout.write("Cálculo: ");
        this.resultado=this.restar();
        for (let i:number = 0; i < this.listaNumeros.length; i++) {
            process.stdout.write(`${this.listaNumeros[i]}`);
            if (i != this.listaNumeros.length - 1) {
                process.stdout.write("-");
            }
        }
        this.mostrarResultado();
    }
    public realizarMultiplicacion():void {
        console.log("Seleccionaste realizar una multiplicación.");
        this.ingresarNumeros();
        process.stdout.write("Cálculo: ");
        this.resultado=this.multiplicar();

        for (let i:number = 0; i < this.listaNumeros.length; i++) {
            process.stdout.write(`${this.listaNumeros[i]}`);
            if (i != this.listaNumeros.length - 1) {
                process.stdout.write("*");
            }
        }
        this.mostrarResultado();
    }
    public realizarDivision():void{
        console.log("Seleccionaste realizar una división");
        this.ingresarNumeros();
        process.stdout.write("Cálculo: ");
        this.resultado=this.dividir();
        if(!isNaN(this.resultado)){
            for (let i:number = 0; i < this.listaNumeros.length; i++) {
                process.stdout.write(`${this.listaNumeros[i]}`);
                if (i != this.listaNumeros.length - 1) {
                    process.stdout.write("/");
                }
            }
            this.mostrarResultado();
        }
        else{
            console.log("ERROR: No se puede dividir por cero.");
        }
    }
}