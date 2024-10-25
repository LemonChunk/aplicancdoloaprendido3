import { auxiliar } from "./auxiliar.js";

export const menu = Object.create(auxiliar);
delete menu.esperarTeclaParaContinuar;
delete menu.limpiarPantalla;
menu.menuPrincipal= function(){
    console.log("¡Hola Olivia!");
    console.log("¿Qué deseas hacer?");
    console.log("[1] Ver mis Tareas.");
    console.log("[2] Buscar una Tarea.");
    console.log("[3] Agregar una Tarea.");
    console.log("[0] Salir.")
    return this.ingresarPorTeclado();
}
menu.menuVerMisTareas = function(){
    console.log("¿Qué tareas deseas ver?");
    console.log("[1] Todas.");
    console.log("[2] Pendientes.");
    console.log("[3] En curso.");
    console.log("[4] Terminadas.");
    console.log("[0] Volver.");
    return this.ingresarPorTeclado();
}
menu.menuVerMisTareas = function(){
    console.log("¿Qué tareas deseas ver?");
    console.log("[1] Todas.");
    console.log("[2] Pendientes.");
    console.log("[3] En curso.");
    console.log("[4] Terminadas.");
    console.log("[0] Volver.");
    return this.ingresarPorTeclado();
}
menu.menuListadoDeTareas= function(arrayTareas){
    let eleccion;
    console.log("Estas son tus tareas.");
    for (let i=0;i<arrayTareas.length;i++){
        console.log(`[${arrayTareas[i].indice}] ${arrayTareas[i].titulo}.`);
    }
    console.log("¿Deseas ver los detalles de alguna?");
    console.log("Introduce el número para verla o X para volver");
    eleccion=this.ingresarPorTeclado();
    while(eleccion.toUpperCase()!=="X" && !this.estaIndice(arrayTareas, eleccion)){
        console.log("El valor ingresado no es una opción válida.");
        eleccion=this.ingresarPorTeclado();
    }
    if (eleccion.toUpperCase() !== "X") {
        return eleccion;
    } else {
        return null;
    }
}
menu.menuDetallesDeTarea = function(tarea){
    let opcion
    console.log("Esta es la tarea que elegiste.");
    tarea.mostrarDetalles();
    console.log("Si deseas editarla, presiona E, o presiona 0 para volver");
    opcion =this.ingresarPorTeclado();
    while(opcion.toUpperCase()!="E" && opcion!="0"){
        console.log("Opción inválida, ingrese nuevamente.");
        opcion =this.ingresarPorTeclado();
    }
    return opcion;
}
menu.menuEdicionDeUnaTarea = function(titulo){
    console.log(`Estás editando la tarea ${titulo}`);
    console.log("[1] Editar título.");
    console.log("[2] Editar descripción.");
    console.log("[3] Editar estado.");
    console.log("[4] Editar dificultad.");
    console.log("[5] Editar vencimiento.");
    console.log("[6] Finalizar edición.");
    return this.ingresarPorTeclado();
}
menu.menuBuscarUnaTarea = function(){
    console.log("Introduce el título de una tarea para buscarla.");
    return this.ingresarPorTeclado();
}
menu.menuVerCoincidenciasBusqueda = function(arrayCoincidencias){
    let eleccion;
    console.log("Estas son las tareas relacionadas a la búsqueda:");
    for(let i=0;i<arrayCoincidencias.length;i++){
        console.log(`[${arrayCoincidencias[i].indice}] ${arrayCoincidencias[i].titulo}.`);
    }
    console.log("¿Deseas ver los detalles de alguna?");
    console.log("Introduce el número para verla o X para volver");
    eleccion=this.ingresarPorTeclado();
    while(eleccion.toUpperCase()!=="X" && !this.estaIndice(arrayCoincidencias, eleccion)){
        console.log("El valor ingresado no es una opción válida.");
        eleccion=this.ingresarPorTeclado();
    }
    if (eleccion.toUpperCase() !== "X") {
        return eleccion;
    } else {
        return null;
    }
}
menu.menuAgregarUnaTarea = function(tareaNueva){
    console.log("Estás creando una nueva tarea.");
    console.log(`[1] Ingresar título (Actual: ${tareaNueva.titulo}).`);
    console.log(`[2] Ingresar descripción (Actual: ${tareaNueva.descripcion}).`);
    console.log(`[3] Ingresar Estado (Actual: ${tareaNueva.estado}).`);
    console.log(`[4] Ingresar dificultad (Actual: ${tareaNueva.dificultad}).`);
    console.log(`[5] Ingresar Vencimiento (Actual: ${tareaNueva.vencimiento}).`);
    console.log("[6] Finalizar la creacíon de la tarea.");
    console.log("[0] Cancelar Creación de tarea.");
    return this.ingresarPorTeclado();
}