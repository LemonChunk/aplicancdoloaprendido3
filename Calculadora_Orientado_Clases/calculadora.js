import { FuncionesAuxiliares } from "./funcionesAuxiliares.js";
import { Operaciones } from "./operaciones.js";
export class Calculadora extends Operaciones {
    constructor() {
        super();
        this.aux = new FuncionesAuxiliares();
        this.resultado = 0;
    }
    mostrarResultado() {
        console.log(`= ${this.resultado}`);
    }
    ingresarNumeros() {
        let alerta = 0, nroOperando = 1, seguir = "-1", ingreso;
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
    realizarSuma() {
        console.log("Seleccionaste realizar una suma.");
        this.ingresarNumeros();
        process.stdout.write("Cálculo: ");
        this.resultado = this.sumar();
        for (let i = 0; i < this.listaNumeros.length; i++) {
            process.stdout.write(`${this.listaNumeros[i]}`);
            if (i != this.listaNumeros.length - 1) {
                process.stdout.write("+");
            }
        }
        this.mostrarResultado();
    }
    realizarResta() {
        console.log("Seleccionaste realizar una resta.");
        this.ingresarNumeros();
        process.stdout.write("Cálculo: ");
        this.resultado = this.restar();
        for (let i = 0; i < this.listaNumeros.length; i++) {
            process.stdout.write(`${this.listaNumeros[i]}`);
            if (i != this.listaNumeros.length - 1) {
                process.stdout.write("-");
            }
        }
        this.mostrarResultado();
    }
    realizarMultiplicacion() {
        console.log("Seleccionaste realizar una multiplicación.");
        this.ingresarNumeros();
        process.stdout.write("Cálculo: ");
        this.resultado = this.multiplicar();
        for (let i = 0; i < this.listaNumeros.length; i++) {
            process.stdout.write(`${this.listaNumeros[i]}`);
            if (i != this.listaNumeros.length - 1) {
                process.stdout.write("*");
            }
        }
        this.mostrarResultado();
    }
    realizarDivision() {
        console.log("Seleccionaste realizar una división");
        this.ingresarNumeros();
        process.stdout.write("Cálculo: ");
        this.resultado = this.dividir();
        if (!isNaN(this.resultado)) {
            for (let i = 0; i < this.listaNumeros.length; i++) {
                process.stdout.write(`${this.listaNumeros[i]}`);
                if (i != this.listaNumeros.length - 1) {
                    process.stdout.write("/");
                }
            }
            this.mostrarResultado();
        }
        else {
            console.log("ERROR: No se puede dividir por cero.");
        }
    }
}
