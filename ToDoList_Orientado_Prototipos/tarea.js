import { herramientas } from "./herramientas.js";
export function tarea(titulo = "Sin título", descripcion = "Sin descripción", estado = "P", fechaVencimiento = "Sin fecha de vencimiento", dificultad = "F") {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.fechaDeCreacion = new Date();
    this.ultimoCambio = new Date();
    this.fechaVencimiento = fechaVencimiento;
    this.dificultad = dificultad;
    this.ingresarTitulo=function(){
        let t = herramientas.teclado("1. Ingrese el título(obligatorio): ");
        while(t===""){
            t = herramientas.teclado("   ERROR: título no puede ser nulo, Ingreselo nuevamente: ");
        }
        this.titulo=t;
    }
    this.ingresarDescripcion=function(){
        let descripcion= herramientas.teclado("Ingrese la descripción: ");
        this.descripcion=descripcion;
    }
    this.ingresarEstado=function(){
        let estado = herramientas.teclado("3. Ingrese el estado, por defecto pendiente: [P]endiente/[E]n curso/[T]erminada/[C]ancelada: ");
        while (estado!="P" && estado!="E" && estado!="T" && estado!="C"){
            estado=herramientas.teclado("   ERROR: el estado ingresado es inválido, ingrese nuevamente: ");
        }
        this.estado=estado;
    }
    this.ingresarDificultad=function(){
        let dificultad=herramientas.teclado("4. Ingrese la dificultad, por defecto fácil: [F]ácil(⭐)/[M]edio(⭐⭐)/[D]ifícil(⭐⭐⭐): ");
        while(dificultad!="F" && dificultad!="M" && dificultad!="D"){
         dificultad=herramientas.teclado("   ERROR: la dificultad ingresada es inválida, ingrese nuevamente: ");
        }
        this.dificultad=dificultad;
    }
    this.ingresarFechaVencimiento=function(){
        let fechaVencimiento= herramientas.pedirFechaVencimiento(), fechaActual = new Date();
        while(fechaVencimiento<=fechaActual){
            console.log("   ERROR: ingresó una fecha que fue antes de la actual o es la actual.");
            fechaVencimiento= herramientas.pedirFechaVencimiento();
        }
        this.fechaVencimiento=fechaVencimiento;
    }
}
