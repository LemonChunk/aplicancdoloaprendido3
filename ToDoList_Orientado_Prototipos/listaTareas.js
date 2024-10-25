export const listaTareas = {
    tareas : [],
    agregarTarea:function(tarea){
        console.log("Agregando tarea:", tarea);
        this.tareas.push(tarea);
    },
    noHayTareas: function () {
        return this.tareas.length === 0;
    },
    ordenarTareas:function(){
        let tareaAux;
        for(let i=0;i<this.tareas.length;i++){
            for(let j=0;j<this.tareas.length-1;j++){
                if(this.tareas[j].titulo>this.tareas[j+1].titulo){
                    tareaAux=this.tareas[j];
                    this.tareas[j]=this.tareas[j+1];
                    this.tareas[j+1]=tareaAux;
                }
            }
        }
    },
    getTodasTareas: function(){
        const arrayResultados= [];
        for (let i = 0; i < this.tareas.length; i++) {
            arrayResultados.push({indice:i, titulo:this.tareas[i].titulo});
        }
        return arrayResultados;
    },
    getTareasPorCondicion:function(condicion){
        const arrayIndices= [];
        for (let i = 0; i < this.tareas.length; i++) {
            if(this.tareas[i].estado===condicion){
                arrayIndices.push({indice:i, titulo:this.tareas[i].titulo});
            }
        }
        return arrayIndices;
    },
    buscarTarea: function(cadena){
        let arrayResultados=[];
        for(let i=0;i<this.tareas.length;i++){
            if(this.tareas[i].titulo.toLowerCase().includes(cadena.toLowerCase())){
                arrayResultados.push({indice:i, titulo:this.tareas[i].titulo});
            }
        }
        return arrayResultados;
    }
}
