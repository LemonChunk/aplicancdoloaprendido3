import PromptSync from "prompt-sync"
export const auxiliar={
    teclado: PromptSync(),
    ingresarPorTeclado: function(){
        return this.teclado(">");
    },
    esperarTeclaParaContinuar: function(){
        this.teclado('Presiona Enter para continuar...');
    },
    limpiarPantalla: function() {
        process.stdout.write('\x1Bc'); // o '\033c'
    },
    estaIndice: function(array, index){
        index=parseInt(index);
        for(let i=0;i<array.length;i++){
            if(index===array[i].indice){
                return true;
            }
        }
        return false;
    }
}