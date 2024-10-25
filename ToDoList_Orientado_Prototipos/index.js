import { buscarTarea, verTarea, crearTarea  } from "./funcionalidades.js";
import { auxiliar} from "./auxiliar.js";
import { menu } from "./menu.js";
let opcionMenu=-1;
do{
    auxiliar.limpiarPantalla();
    opcionMenu=menu.menuPrincipal();
    auxiliar.limpiarPantalla();
    switch(opcionMenu){
        case "1":
            verTarea();
            break;
        case "2":
            buscarTarea();
            break;
        case "3":
            crearTarea();
            break;
        case "0":
            console.log("Saliendo...");
            auxiliar.esperarTeclaParaContinuar();
            break;
        default:
            console.log("Opción inválida");
            auxiliar.esperarTeclaParaContinuar();
        break;
    }
}while(opcionMenu!=0);
