import { auxiliar } from "./auxiliar.js";
import { menu } from "./menu.js";
import { listaTareas } from "./listaTareas.js";
import { tarea } from "./tarea.js";
function editarTarea(i){
    let opcion, tareaEnEdicion=listaTareas.tareas[i];
    tareaEnEdicion.actualizarUltimaEdicion();
    do{
        auxiliar.limpiarPantalla();
        opcion=menu.menuEdicionDeUnaTarea()
        auxiliar.limpiarPantalla();
        switch(opcion){
            case "1":
                tareaEnEdicion.ingresarTitulo();
                break;
            case "2":
                tareaEnEdicion.ingresarDescripcion();
                break;
            case "3":
                tareaEnEdicion.ingresarEstado();
                break;
            case "4":
                tareaEnEdicion.ingresarDificultad();
                break;
            case "5":
                tareaEnEdicion.ingresarVencimiento();
                break;
            case"6":
                listaTareas.tareas[i]=tareaEnEdicion;
                listaTareas.ordenarTareas();
                console.log("Datos guardados con éxito.");
                auxiliar.esperarTeclaParaContinuar();
                break;
            default:
                console.log("Opción inválida.");
                esperarTeclaParaContinuar();
                break;
        }
    }while(opcion!="6");
}
export function crearTarea(){
    const tareaNueva = Object.create(tarea);
    let opcion=-1;
    do{
        auxiliar.limpiarPantalla();
        opcion=menu.menuAgregarUnaTarea(tareaNueva);
        auxiliar.limpiarPantalla();
        switch(opcion){
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
                tareaNueva.ingresarVencimiento();
                break;
            case "6":
                if(tareaNueva.titulo==="Sin título"){
                    console.log("No puedes crear una tarea sin ingresar un título.");
                    opcion=-1;
                    auxiliar.esperarTeclaParaContinuar();
                }
                else{
                    listaTareas.tareas.push(tareaNueva);
                    console.log("Tarea creada con éxito!");
                    auxiliar.esperarTeclaParaContinuar();
                }
                break;
            case "0":
                console.log("Creación de tarea cancelada.");
                auxiliar.esperarTeclaParaContinuar();
                break;
            default:
                console.log("Opción inválida");
                auxiliar.esperarTeclaParaContinuar();
                break;
        }
    }while(opcion!="6" && opcion!="0");
}
export function buscarTarea(){
    let cadena, arrayIndicesCoincidencias, indiceTareaElegida, opcionEditar;
    if(listaTareas.noHayTareas()){
        console.log("No hay tareas en la lista.");
        auxiliar.esperarTeclaParaContinuar();
    }
    else{
        cadena=menu.menuBuscarUnaTarea();
        arrayIndicesCoincidencias=listaTareas.buscarTarea(cadena);
        if(arrayIndicesCoincidencias.length===0){
            console.log(`No se encontraron tareas relacionadas a ${cadena}.`);
            auxiliar.esperarTeclaParaContinuar();
        }
        else{
            indiceTareaElegida=menu.menuVerCoincidenciasBusqueda(arrayIndicesCoincidencias);
            if(indiceTareaElegida===null){
                console.log("Volviendo al menú principal.");
                auxiliar.esperarTeclaParaContinuar();
            }
            else{
                opcionEditar=menu.menuDetallesDeTarea(listaTareas.tareas[indiceTareaElegida]);
                if(opcionEditar.toUpperCase()==="E"){
                    editarTarea(indiceTareaElegida);
                }
                else{
                    console.log("Volviendo al menú principal.");
                    auxiliar.esperarTeclaParaContinuar();
                }
            }
        }
    }
}
export function verTarea(){
    let menuVer=-1, arrayTareas, indiceTareaElegida, opcionEditar;
    if(listaTareas.noHayTareas()){
        console.log("No tienes tareas agendadas para ver.");
        auxiliar.esperarTeclaParaContinuar();
    }
    else{
        do{
            auxiliar.limpiarPantalla();
            menuVer=menu.menuVerMisTareas();
            auxiliar.limpiarPantalla();
            switch (menuVer){
                case "1":
                    arrayTareas=listaTareas.getTodasTareas();
                    indiceTareaElegida=menu.menuListadoDeTareas(arrayTareas);
                    if(indiceTareaElegida===null){
                        console.log("Volviendo al menú principal.");
                        auxiliar.esperarTeclaParaContinuar();
                    }
                    else{
                        opcionEditar=menu.menuDetallesDeTarea(listaTareas.tareas[indiceTareaElegida]);
                        if(opcionEditar.toUpperCase()==="E"){
                            editarTarea(indiceTareaElegida);
                        }
                        else{
                            console.log("Volviendo al menú principal.");
                            auxiliar.esperarTeclaParaContinuar();
                        }
                    }
                    break;
                case "2":
                    arrayTareas=listaTareas.getTareasPorCondicion("Pendiente");
                    indiceTareaElegida=menu.menuListadoDeTareas(arrayTareas);
                    if(indiceTareaElegida===null){
                        console.log("Volviendo al menú principal.");
                        auxiliar.esperarTeclaParaContinuar();
                    }
                    else{
                        opcionEditar=menu.menuDetallesDeTarea(listaTareas.tareas[indiceTareaElegida]);
                        if(opcionEditar.toUpperCase()==="E"){
                            editarTarea(indiceTareaElegida);
                        }
                        else{
                            console.log("Volviendo al menú principal.");
                            auxiliar.esperarTeclaParaContinuar();
                        }
                    }
                    break;
                case "3":
                    arrayTareas=listaTareas.getTareasPorCondicion("En curso");
                    indiceTareaElegida=menu.menuListadoDeTareas(arrayTareas);
                    if(indiceTareaElegida===null){
                        console.log("Volviendo al menú principal.");
                        auxiliar.esperarTeclaParaContinuar();
                    }
                    else{
                        opcionEditar=menu.menuDetallesDeTarea(listaTareas.tareas[indiceTareaElegida]);
                        if(opcionEditar.toUpperCase()==="E"){
                            editarTarea(indiceTareaElegida);
                        }
                        else{
                            console.log("Volviendo al menú principal.");
                            auxiliar.esperarTeclaParaContinuar();
                        }
                    }
                    break;
                case "4":
                    arrayTareas=listaTareas.getTareasPorCondicion("Terminada");
                    indiceTareaElegida=menu.menuListadoDeTareas(arrayTareas);
                    if(indiceTareaElegida===null){
                        console.log("Volviendo al menú principal.");
                        auxiliar.esperarTeclaParaContinuar();
                    }
                    else{
                        opcionEditar=menu.menuDetallesDeTarea(listaTareas.tareas[indiceTareaElegida]);
                        if(opcionEditar.toUpperCase()==="E"){
                            editarTarea(indiceTareaElegida);
                        }
                        else{
                            console.log("Volviendo al menú principal.");
                            auxiliar.esperarTeclaParaContinuar();
                        }
                    }
                    break;
                case "0":
                    console.log("Volviendo al menú anterior.");
                    auxiliar.esperarTeclaParaContinuar();
                    break;
                default:
                    console.log("Opción inválida.");
                    auxiliar.esperarTeclaParaContinuar();
                    break;
            }
        }while(menuVer!=0);
    }
}