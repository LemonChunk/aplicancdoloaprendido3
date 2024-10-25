import { auxiliar } from "./auxiliar.js";
export const tarea = Object.create(auxiliar);
tarea.titulo = "Sin título";
tarea.descripcion = "Sin descripción";
tarea.estado = "Pendiente";
tarea.creacion = new Date();
tarea.ultimaEdicion= new Date();
tarea.vencimiento="Sin fecha de vencimiento";
tarea.dificultad = "Fácil";
tarea.mostrarDetalles = function(){
    console.log(`   ${this.titulo}\n`);
    console.log(`   ${this.descripcion}\n`);
    console.log(`Estado:    ${this.estado}`);
    console.log(`Dificultad:    ${this.dificultad}`);
    console.log(`Vencimiento:   ${this.vencimiento}`);
    console.log(`Creación:   ${this.creacion}`);
    console.log(`Último edición:   ${this.ultimaEdicion}\n\n`);
}
tarea.actualizarUltimaEdicion = function(){
    this.ultimaEdicion = new Date();
}
tarea.ingresarTitulo = function(){
    console.log("Ingrese el título(obligatorio): ")
    let t = this.ingresarPorTeclado();
    while(t==="" || t==="Sin título"){
        console.log("   ERROR: título no puede ser nulo, Ingreselo nuevamente: ")
        t= this.ingresarPorTeclado();
    }
    this.titulo=t;
}
tarea.ingresarDescripcion = function(){
    console.log("Ingrese la descripción: ");
    let descripcion= this.ingresarPorTeclado();
    this.descripcion=descripcion;
}
tarea.ingresarEstado= function(){
    console.log("Ingrese el estado, por defecto pendiente ([P]endiente/[E]n curso/[T]erminada/[C]ancelada):");
    let estado = this.ingresarPorTeclado().toUpperCase();;
    while (estado!="P" && estado!="E" && estado!="T" && estado!="C"){
        console.log("   ERROR: el estado ingresado es inválido, ingrese nuevamente: ")
        estado= this.ingresarPorTeclado().toUpperCase();
    }
    switch (estado){
        case "P": estado="Pendiente";break;
        case "E": estado="En curso";break;
        case "T": estado="Terminada";break;
        case "C": estado="Cancelada";break;
    }
    this.estado=estado;
}
tarea.ingresarDificultad =function(){
    console.log("Ingrese la dificultad, por defecto fácil: [F]ácil(⭐)/[M]edia(⭐⭐)/[D]ifícil(⭐⭐⭐): ")
    let dificultad= this.ingresarPorTeclado().toUpperCase();;
    while(dificultad!="F" && dificultad!="M" && dificultad!="D"){
        console.log("   ERROR: la dificultad ingresada es inválida, ingrese nuevamente: ")
        dificultad= this.ingresarPorTeclado().toUpperCase();
    }
    switch (dificultad){
        case "F": dificultad="Fácil";break;
        case "M": dificultad="Media";break;
        case "D": dificultad="Difícil";break;
    }
    this.dificultad=dificultad;
}
tarea.ingresarVencimiento = function() {
    let fechaVencimiento, band=true;
    // Loop para asegurar que el usuario ingrese una fecha válida
    while (band) {
        console.log("Ingrese la fecha de vencimiento (dd/mm/yyyy): ");
        const entrada = this.ingresarPorTeclado();
        // Intentar convertir la entrada en una fecha válida
        const [dia, mes, año] = entrada.split('/').map(Number); // Convertir a números
        fechaVencimiento = new Date(año, mes - 1, dia); // Mes empieza en 0 (Enero)
        // Validar que la fecha sea válida y no anterior a hoy
        if (!isNaN(fechaVencimiento) && fechaVencimiento >= new Date()){// No permitir fechas anteriores 
            band=false;
        } else {
            console.log("Fecha inválida o anterior a hoy. Inténtelo de nuevo.");
        }
    }
    // Devolver la fecha formateada en formato local
    this.vencimiento= fechaVencimiento.toLocaleDateString('es-AR');
}
