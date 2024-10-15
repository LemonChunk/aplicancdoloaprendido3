
import { herramientas } from "./herramientas.js";

export function gestorMenus(){
    this.menuPrincipal= function(){
        console.log("¡Hola Olivia!\t\n ¿Qué deseas hacer?");
        console.log("[1] Ver mis tareas.\n[2] Buscar una tarea.\n[3] Agregar una tarea.\n[0] Salir.");
        let opcion = herramientas.teclado("Su opción: ");
        return opcion;
    }
    this.menuVerTareas = function(){
        console.log("¿Qué tareas desea ver?\n[1] Todas.\n[2] Pendientes.\n[3] En Curso\n[4] Terminadas.\n[0] Volver");
        let opcion = herramientas.teclado("Su opción: ");
        return opcion;
    }
    this.menuAgregarTarea=function(titulo, descripcion, estado, dificultad, vencimiento){
        console.log("Está creando una nueva tarea.\n\nPara ingresar datos, seleccione una opción");
        console.log(`[1] Ingresar titulo(Actual: ${titulo})`);
        console.log(`[2] Ingresar Descripción(Actual: ${descripcion})`);
        console.log(`[3] Ingresar estado(Actual: ${estado})`);
        console.log(`[4] Ingresar dificultad(Actual: ${dificultad})`);
        console.log(`[5] Ingresar fecha de Vencimiento(Actual: ${vencimiento})`);
        console.log("Presione 0 para terminar de crearla y guardar los datos.\nPresione X para cancelar la ");
        let opcion = herramientas.teclado("Su opción: ");
        return opcion;
    }
    this.menuTareas=function(){
        console.log("¿Qué tareas deseas ver?")
        console.log("[1] Todas.\n[2] Pendientes.\n[3] En curso.\n[4] Terminadas.\n[0] Salir.");
        let opcion = herramientas.teclado("Su opción: ");
        return opcion;
    }
    this.menuVerDetalles=function(indices){
        let index;
        console.log("¿Deseas ver los detalles de alguna?\nIntroduce el número para verla o 0 para volver.");
        index = parseInt(herramientas.teclado("Su opción: "));
        if(index!=0){
            while(isNaN(index) || !herramientas.estaIndice(indices, index-1)){
                index = parseInt(herramientas.teclado("Opción inválida, ingrese nuevamente: "));
            }
        }
        if(index===0){
           return NaN;
        }
        else{
            return index-1;
        }
    }
}