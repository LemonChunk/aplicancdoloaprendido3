import { tarea } from "./tarea.js";
import { gestorMenus} from "./gestorMenus.js"; 
import { herramientas } from "./herramientas.js";
export function listaTareas(){
    this.arrayTareas=[];
    this.menu=new gestorMenus();
    this.ordenarTareas=function(){
        for (let i = 0; i < this.arrayTareas.length; i++) {
            for (let j = 0; j < this.arrayTareas.length - 1; j++) {
                if (this.arrayTareas[j].titulo > this.arrayTareas[j + 1].titulo) {
                // Intercambiar posiciones de las tareas
                let tareaAux = this.arrayTareas[j];
                this.arrayTareas[j] = this.arrayTareas[j + 1];
                this.arrayTareas[j + 1] = tareaAux;
                }
            }
        } 
    }
    this.setTarea= function(t){
        this.arrayTareas.push(t);
    }
    this.mostrarTarea = function(i) {
        let editar;
        console.log("----------------------------------------------------------------\nDETALLES DE LA TAREA");
        console.log(`TITULO: ${this.arrayTareas[i].titulo}.`);
        console.log(`DESCRIPCION: ${this.arrayTareas[i].descripcion}.`);
        console.log(`ESTADO: ${this.arrayTareas[i].estado}.`);
        console.log(`DIFICULTAD: ${this.arrayTareas[i].dificultad}.`);
        console.log(`FECHA DE CREACION: ${this.arrayTareas[i].fechaDeCreacion}.`);
        console.log(`FECHA DE ULTIMO CAMBIO: ${this.arrayTareas[i].ultimoCambio}.`);
        console.log(`FECHA DE VENCIMIENTO: ${this.arrayTareas[i].fechaVencimiento}.`);
        console.log("----------------------------------------------------------------");
        console.log("\nSi deseas editarla, presione E, o 0 para volver.");
        editar=herramientas.teclado("Su opción: ");
        while(editar!="E" && editar!="0"){
            editar=herramientas.teclado("opción inválida, ingrese nuevamente: ");
        }
        if(editar==="0"){
            console.log("Volviendo al menú anterior.");
            herramientas.esperarTeclaParaContinuar();
        }
        else{
            this.editarTarea(i);
        }
    }
    this.editarTarea=function(i){
        let editar, fecha, tareaAux = new tarea(), fechaAhora = new Date();
        tareaAux = this.arrayTareas[i];
        do{
            herramientas.limpiarPantalla();
            console.log(`Estás editando la tarea ${tareaAux.titulo}`);
            console.log(`[1] editar titulo(Actual: ${tareaAux.titulo})`);
            console.log(`[2] editar Descripción(Actual: ${tareaAux.descripcion})`);
            console.log(`[3] editar estado(Actual: ${tareaAux.estado}, oprima [C] para marcarla como cancelada)`);
            console.log(`[4] editar dificultad(Actual: ${tareaAux.dificultad})`);
            console.log(`[5] editar fecha de Vencimiento(Actual: ${tareaAux.fechaVencimiento}\n)`);
            console.log("Presione 0 para terminar de editarla y guardar los datos.");
            editar = herramientas.teclado("Su opción: ");
            tareaAux.ultimoCambio=fechaAhora;
            herramientas.limpiarPantalla();
            switch(editar){
                case "1":
                    tareaAux.ingresarTitulo();
                    break;
                case "2":
                    tareaAux.ingresarDescripcion();
                    break;
                case "3":
                    tareaAux.ingresarEstado();
                    break;
                case "4":
                    tareaAux.ingresarDificultad();
                    break;
                case "5":
                    console.log("Desea...\n[0]Dejar en blanco fecha de vencimiento\n[1]Modificarla fecha de vencimiento\n Cualquier otro valor permite volver atrás.");
                    fecha = herramientas.teclado("Su opción: ");
                    if(fecha=="0"){
                        tareaAux.vencimiento="Sin fecha de vencimiento";
                    }
                    else{
                    if(fecha=="1"){
                        tareaAux.ingresarFechaVencimiento();
                    }
                }
                break;
                case "C":
                    console.log("Usted ha marcado a la tarea como cancelada.");
                    herramientas.esperarTeclaParaContinuar();
                    tareaAux.estado="Cancelada";
                    break;
                case "0":
                    this.arrayTareas[i]=tareaAux;
                    this.ordenarTareas();
                    console.log("Datos guardados con éxito.\n Volviendo al menú anterior.");
                    herramientas.esperarTeclaParaContinuar();
                    break;
                default:
                    console.log("Opción inválida.");
                    herramientas.esperarTeclaParaContinuar();
                break;
            }
        }while(editar!="0");
    }
    this.mostrarTodas=function(){
        const arrayIndices= [];
        console.log("Estas son todas tus tareas:");
        for (let i = 0; i < this.arrayTareas.length; i++) {
            arrayIndices.push(i);
            console.log(`[${i + 1}] ${this.arrayTareas[i].titulo}.`);
        }
        return arrayIndices;
    }
    this.mostrarTareasCondicionalmente=function(s){
        let band=0;
        const arrayIndices= [];
        console.log("Estas son tus tareas con el estado seleccionado:");
        for (let i = 0; i < this.arrayTareas.length; i++) {
            if(this.arrayTareas[i].estado===s){
                band=1;
                arrayIndices.push(i);
                console.log(`[${i + 1}] ${this.arrayTareas[i].titulo}.`);
            }
        }
        if(band===0){
            return null;
        }
        else{
            return arrayIndices;
        }
    }
    this.mostrarCoincidencias=function(array, b){
        if(b===0){
            
            return null;
        }
        else{
            console.log(`Hubieron ${b} coincidencias en la búsqueda: `);
            for(let i=0;i<array.length;i++){
                console.log(`[${array[i]+1}] ${this.arrayTareas[array[i]].titulo} `);
            }
            return array;
        }
    }
    this.buscarTarea=function(cadena){
        let arrayIndices=[], band=0, m=new gestorMenus(), indiceTarea;
        for(let i=0;i<this.arrayTareas.length;i++){
            if(this.arrayTareas[i].titulo.toLowerCase().includes(cadena.toLowerCase())){
                arrayIndices.push(i);
                band++
            }
        }
        if(this.mostrarCoincidencias(arrayIndices, band)===null){
            console.log("No hay tareas relacionadas con la búsqueda.");
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
                this.mostrarTarea(indiceTarea);
            }
        }
    } 
}