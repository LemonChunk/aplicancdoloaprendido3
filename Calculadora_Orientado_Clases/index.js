import { Calculadora } from "./calculadora.js";
import { FuncionesAuxiliares } from "./funcionesAuxiliares.js";
const calculadora = new Calculadora();
const aux = new FuncionesAuxiliares();
let menu = "-1";
do {
    aux.limpiarPantalla();
    console.log("MENU DE CALCULADORA");
    console.log("   1. REALIZAR SUMA");
    console.log("   2. REALIZAR RESTA");
    console.log("   3. REALIZAR MULTIPLICACIÓN");
    console.log("   4. REALIZAR DIVISIÓN");
    console.log("   5. SALIR");
    menu = aux.solicitarString();
    aux.limpiarPantalla();
    switch (menu) {
        case "1":
            calculadora.realizarSuma();
            break;
        case "2":
            calculadora.realizarResta();
            break;
        case "3":
            calculadora.realizarMultiplicacion();
            break;
        case "4":
            calculadora.realizarDivision();
            break;
        case "5":
            console.log("SALIENDO DEL PROGRAMA...");
            break;
        default:
            console.log("Ingresó una opción inválida");
            break;
    }
    aux.esperarTeclaParaContinuar();
    calculadora.inicializarOperandos();
} while (menu != "5");
