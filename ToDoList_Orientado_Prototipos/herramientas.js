import promptSync from "prompt-sync";
export const herramientas={
    teclado:promptSync(),
    esperarTeclaParaContinuar() {
        this.teclado('Presiona Enter para continuar...');
    },
    limpiarPantalla() {
        process.stdout.write('\x1Bc'); // o '\033c'
    },
    esAnioBisiesto(anio) {
        return (anio % 4 === 0 && anio % 100 !== 0);
    },
    estaIndice(array, index){
        for(let i=0;i<array.length;i++){
            if(index===array[i]){
                return true;
            }
        }
        return false;
    },
    pedirFechaVencimiento(){
        let anio, mes, dia, band=-1, hora, fechaVencimiento;
        anio = this.teclado("Ingrese el año de vencimiento: ");
        anio=parseInt(anio);
        while(isNaN(anio) || anio<1000 || anio>9999){
            anio = this.teclado("   año de vencimiento ingresado inválido, ingrese nuevamente: " );
            anio= parseInt(anio);
        }
        mes = this.teclado("Ingrese el mes de vencimiento(1 al 12): ");
        mes= parseInt(mes);
        while(isNaN(mes) ||(mes<1 || mes>12)){
            mes = this.teclado("    mes de vencimiento ingresado inválido, ingrese nuevamente: ");
            mes= parseInt(mes);
        }
        do{
            if(band>=0){
                console.log("   ERROR: ingresó un dia inválido.");
            }
            switch(mes){
                case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                    dia = this.teclado("Ingrese el dia de vencimiento:(1 al 31) "); 
                    dia= parseInt(dia);
                    if(dia<1 || dia>31){
                        dia=NaN;
                    }   
                    break;
                case 2:
                    if(this.esAnioBisiesto(anio)){
                        dia = this.teclado("Ingrese el dia de vencimiento:(1 al 29) ")   
                        dia= parseInt(dia);
                        if(dia<1 || dia>29){
                            dia=NaN;
                        } 
                    }
                    else{
                        dia = this.teclado("Ingrese el dia de vencimiento:(1 al 28) "); 
                        dia= parseInt(dia);  
                        if(dia<1 || dia>28){
                            dia=NaN;
                        } 
                    }
                    break;
                case 4: case 6: case 9: case 11: 
                   parseInt(dia = this.teclado("Ingrese el dia de vencimiento:(1 al 30) "),10); 
                    if(dia<1 || dia>30){
                        dia=NaN;
                    }   
                    break;
            }
            band++;
        }while(isNaN(dia));
        hora = this.teclado("Ingrese la hora de vencimiento(ingrese valores enteros de 0 a 23): ");
        hora = parseInt(hora);
        while(isNaN(hora) ||(hora<0 || hora>23)){
            hora = this.teclado("    hora de vencimiento ingresado inválido, ingrese nuevamente: ");
            hora= parseInt(hora);
        }
        fechaVencimiento = new Date(anio, mes-1, dia, hora);
        return fechaVencimiento;
    }
}