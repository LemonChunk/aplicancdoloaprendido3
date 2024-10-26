import promptSync from "prompt-sync";
export class FuncionesAuxiliares {
    constructor() {
        this.teclado = promptSync();
    }
    solicitarString() {
        return this.teclado('> ');
    }
    solicitarNumero() {
        const entrada = this.teclado('Ingresa un número: ');
        return Number(entrada); // Convertimos la entrada a número
    }
    esNumero(numero) {
        return (!isNaN(numero));
    }
    esperarTeclaParaContinuar() {
        this.teclado('Presiona Enter para continuar...');
    }
    limpiarPantalla() {
        process.stdout.write('\x1Bc'); // o '\033c'
    }
}
