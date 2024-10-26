import promptSync from "prompt-sync";
export class FuncionesAuxiliares{
    private teclado:Function;
    constructor(){
        this.teclado=promptSync();
    }
    public solicitarString():string{
        return  this.teclado('> ');
    }
    public solicitarNumero():number {
        const entrada = this.teclado('Ingresa un número: ');
        return Number(entrada);  // Convertimos la entrada a número
    }
    public esNumero(numero:number):boolean{
        return (!isNaN(numero));
    }
    public esperarTeclaParaContinuar() {
        this.teclado('Presiona Enter para continuar...');
    }
    public limpiarPantalla() {
        process.stdout.write('\x1Bc'); // o '\033c'
    }
}