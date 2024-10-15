import { gestorMenus } from "./gestorMenus.js";
import { herramientas } from "./herramientas.js";
import { tarea } from "./tarea.js";
export function opcion1(listaTareas){
    let menuVer=-1, m= new gestorMenus(), arrayIndices, indiceTarea;
    if(listaTareas.arrayTareas.length===0){
        console.log("No tienes tareas agendadas para ver.");
        herramientas.esperarTeclaParaContinuar();
    }
    else {
        do{
            herramientas.limpiarPantalla();
            menuVer=m.menuVerTareas();
            herramientas.limpiarPantalla();
            switch(menuVer){
                case "1":
                    arrayIndices=listaTareas.mostrarTodas();
                    indiceTarea=m.menuVerDetalles(arrayIndices);
                    if(isNaN(indiceTarea)){
                        herramientas.limpiarPantalla();
                        console.log("Volviendo al menú anterior.");
                        herramientas.esperarTeclaParaContinuar();
                    }
                    else{
                        listaTareas.mostrarTarea(indiceTarea);
                    }
                    break;
                case "2":
                    arrayIndices=listaTareas.mostrarTareasCondicionalmente("P");
                    if(arrayIndices===null){
                        console.log("No hay tareas con el estado pendiente.");
                        herramientas.esperarTeclaParaContinuar();
                    }
                    else{
                        indiceTarea=m.menuVerDetalles(arrayIndices);
                        if(isNaN(indiceTarea)){
                            herramientas.limpiarPantalla();
                            console.log("Volviendo al menú anterior.");
                            herramientas.esperarTeclaParaContinuar();
                        }
                        else{
                            listaTareas.mostrarTarea(indiceTarea);
                        }
                        break;
                    }
                    break;
                case "3":
                    arrayIndices=listaTareas.mostrarTareasCondicionalmente("E");
                    if(arrayIndices===null){
                        console.log("No hay tareas con el estado en proceso.");
                        herramientas.esperarTeclaParaContinuar();
                    }
                    else{
                        indiceTarea=m.menuVerDetalles(arrayIndices);
                        if(isNaN(indiceTarea)){
                            herramientas.limpiarPantalla();
                            console.log("Volviendo al menú anterior.");
                            herramientas.esperarTeclaParaContinuar();
                        }
                        else{
                            listaTareas.mostrarTarea(indiceTarea);
                        }
                        break;
                    }
                    break;
                case "4":
                    arrayIndices=listaTareas.mostrarTareasCondicionalmente("T");
                    if(arrayIndices===null){
                        console.log("No hay tareas con el estado terminado.");
                        herramientas.esperarTeclaParaContinuar();
                    }
                    else{
                        indiceTarea=m.menuVerDetalles(arrayIndices);
                        if(isNaN(indiceTarea)){
                            herramientas.limpiarPantalla();
                            console.log("Volviendo al menú anterior.");
                            herramientas.esperarTeclaParaContinuar();
                        }
                        else{
                            listaTareas.mostrarTarea(indiceTarea);
                        }
                        break;
                    }
                    break;
                case "0":
                    console.log("Volviendo al menú anterior.");
                    herramientas.esperarTeclaParaContinuar();
                    break;
                default:
                    console.log("Opción inválida.");
                    herramientas.esperarTeclaParaContinuar();
                    break;
            }
            
        }while(menuVer!=0);
    }
}
export function opcion2(listaTareas){
    let cadena;
    if(listaTareas.arrayTareas.length===0){
        console.log("No tienes tareas para buscar.");
        herramientas.esperarTeclaParaContinuar();
    }
    else{
        console.log("Introduce el título de una tarea para buscarla: ");
        cadena= herramientas.teclado("> ");
        listaTareas.buscarTarea(cadena);
    }
}
export function opcion3(listaTareas){
    let menuAgregar=-1;
    let tareaNueva = new tarea(), m= new gestorMenus();
    do{
        herramientas.limpiarPantalla();
        menuAgregar=m.menuAgregarTarea(tareaNueva.titulo, tareaNueva.descripcion, tareaNueva.estado, tareaNueva.dificultad, tareaNueva.fechaVencimiento);
        herramientas.limpiarPantalla();
        switch(menuAgregar){
            case "1":
                tareaNueva.ingresarTitulo();
                break;
            case "2":
                tareaNueva.ingresarDescripcion();
                break;
            case "3":
                tareaNueva.ingresarEstado();
                break;
            case "4":
                tareaNueva.ingresarDificultad();
                break;
            case "5":
                tareaNueva.ingresarFechaVencimiento();
                break;
            case "X":
                console.log("Tarea cancelada, volviendo al menú principal.");
                herramientas.esperarTeclaParaContinuar();
                break;
            case "0":
                if(tareaNueva.titulo==="Sin título"){
                    menuAgregar=-1;
                    console.log("No se puede agregar la tarea sin un título.");
                    herramientas.esperarTeclaParaContinuar();
                }
                else{
                    listaTareas.setTarea(tareaNueva);
                    listaTareas.ordenarTareas();
                    console.log(`¡Tarea creada con éxito!`);
                    herramientas.esperarTeclaParaContinuar();
                }
                break;
            default:
                console.log("Opción inválida.");
                herramientas.esperarTeclaParaContinuar();
                break;
        }
    }while(menuAgregar!="0" && menuAgregar!="X");
}