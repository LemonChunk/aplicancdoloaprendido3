import { listaTareas } from "./listaTareas.js";
import { herramientas } from "./herramientas.js";
import { gestorMenus } from "./gestorMenus.js";
import { opcion1, opcion2, opcion3 } from "./opciones.js";
const lista = new listaTareas(), m = new gestorMenus();
let mainMenu=-1;
do{
    herramientas.limpiarPantalla();
    mainMenu=m.menuPrincipal();
    herramientas.limpiarPantalla();
    switch(mainMenu){
        case "1":
            opcion1(lista);
            break;
        case "2":
            opcion2(lista);
            break;
        case "3":
            opcion3(lista);
            break;
        case "0":
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("ERROR: opción no válida.");
            herramientas.esperarTeclaParaContinuar();
            break;
    }
}while(mainMenu!="0");