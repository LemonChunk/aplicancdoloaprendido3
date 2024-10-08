import { Herramientas } from "./Herramientas.js";
import { Operaciones } from "./Operaciones.js";
import { Numeros } from "./Numeros.js";
export class Calculadora extends Numeros {
    constructor() {
        super();
        this.resultado = 0;
        this.herramienta = new Herramientas();
    }
    ingresarNumeros() {
        let alerta = 0, operando = 1, seguir = "-1", ingreso;
        do {
            alerta = 0;
            do {
                if (alerta != 0) {
                    console.log("ERROR: ingresó algún valor inválido, ingrese nuevamente...");
                }
                console.log(`Ingrese el operando número ${operando}`);
                ingreso = Number(this.herramienta.teclado("Su número: "));
                alerta++;
            } while (isNaN(ingreso));
            this.setNumero(ingreso);
            if (operando > 1) {
                console.log("Desea continuar añadiendo operandos al cálculo?\n1. Continuar\n2. Pasar al cálculo");
                seguir = this.herramienta.teclado("Su opción: ");
                while (seguir != "1" && seguir != "2") {
                    console.log("Ingresó un valor inválido, ingrese nuevamente...");
                    seguir = this.herramienta.teclado("Su opción: ");
                }
            }
            operando++;
        } while (seguir != "2");
    }
    realizarSuma() {
        this.resultado = Operaciones.sumarNumeros(this.getNumeros(), this.resultado);
        process.stdout.write(`= ${this.resultado}\n`);
        this.herramienta.esperarTeclaParaContinuar();
    }
    realizarResta() {
        this.resultado = Operaciones.restarNumeros(this.getNumeros(), this.resultado);
        process.stdout.write(`= ${this.resultado}\n`);
        this.herramienta.esperarTeclaParaContinuar();
    }
    realizarMultiplicacion() {
        this.resultado = Operaciones.multiplicarNumeros(this.getNumeros(), this.resultado);
        process.stdout.write(`= ${this.resultado}\n`);
        this.herramienta.esperarTeclaParaContinuar();
    }
    realizarDivision() {
        this.resultado = Operaciones.dividirNumeros(this.getNumeros(), this.resultado);
        if (isNaN(this.resultado)) {
            console.log("No se puede realizar la división si el denominador es 0.");
        }
        else {
            process.stdout.write(`= ${this.resultado}\n`);
        }
        this.herramienta.esperarTeclaParaContinuar();
    }
}
