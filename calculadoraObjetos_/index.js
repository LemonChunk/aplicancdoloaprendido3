import { Calculadora } from "./Calculadora.js";
import { Herramientas } from "./Herramientas.js";
const mensajeMenu = () => { console.log("MENÚ DE CALCULADORA\n1. SUMAR NÚMEROS\n2. RESTAR NÚMEROS\n3. MULTIPLICAR NÚMEROS\n4. DIVIDIR NÚMEROS\n5. SALIR"); };
const h = new Herramientas();
const c = new Calculadora();
let menu;
do {
    h.limpiarPantalla();
    mensajeMenu();
    menu = h.teclado("tu opción elegida: ");
    h.limpiarPantalla();
    switch (menu) {
        case "1":
            c.ingresarNumeros();
            c.realizarSuma();
            c.inicializarLista();
            break;
        case "2":
            c.ingresarNumeros();
            c.realizarResta();
            c.inicializarLista();
            break;
        case "3":
            c.ingresarNumeros();
            c.realizarMultiplicacion();
            c.inicializarLista();
            break;
        case "4":
            c.ingresarNumeros();
            c.realizarDivision();
            c.inicializarLista();
            break;
        case "5":
            console.log("programa finalizado.");
            break;
        default:
            console.log("Opción inválida");
            break;
    }
} while (menu != "5");
