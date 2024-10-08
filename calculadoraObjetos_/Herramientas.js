import p from "prompt-sync";
export class Herramientas {
    constructor() {
        this.teclado = p();
    }
    esperarTeclaParaContinuar() {
        this.teclado('Presiona Enter para continuar...');
    }
    limpiarPantalla() {
        process.stdout.write('\x1Bc'); // o '\033c'
    }
}
