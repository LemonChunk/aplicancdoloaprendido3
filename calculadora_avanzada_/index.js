//process.stdout.write se usa para evitar el salto de linea

const teclado=require("prompt-sync")();
let i, menu;
const mensajeMenu= () => {console.log("MENÚ DE CALCULADORA\n1. SUMAR NÚMEROS\n2. RESTAR NÚMEROS\n3. MULTIPLICAR NÚMEROS\n4. DIVIDIR NÚMEROS\n5. SALIR")};
function leerNumeros(){
    let alerta=0, arrayOperandos=[], operando=0, seguir=-1; 
    do{
        alerta=0;
        do{
            if(alerta!=0){
                console.log("ERROR: ingresó algún valor inválido, ingrese nuevamente...");
            }
            console.log(`Ingrese el operando número ${operando+1}`);
            arrayOperandos[operando]= teclado("Su número: ");
            arrayOperandos[operando]=parseFloat(arrayOperandos[operando], 10);
            alerta++;
        }while(isNaN(arrayOperandos[operando]));
        if(operando>=1){
                console.log("Desea continuar añadiendo operandos al cálculo?\n1. Continuar\n2. Pasar al cálculo");
                seguir = teclado("Su opción: ");
                while(seguir!="1" && seguir !="2"){
                    console.log("Ingresó un valor inválido, ingrese nuevamente...");
                    seguir = teclado("Su opción: ");
                }
        }
        operando++;
    }while(seguir!="2");
    return arrayOperandos;
};
function sumarNumeros(){
    let arrayNum=leerNumeros(), resultado=0;
    for(i=0;i<arrayNum.length;i++){
        resultado+=arrayNum[i];
        process.stdout.write(`${arrayNum[i]}`);
        if(i!=arrayNum.length-1){
            process.stdout.write("+");
        }
    }
    console.log(`=${resultado}`);
}
function restarNumeros(){
    let arrayNum=leerNumeros(), resultado=arrayNum[0];
    process.stdout.write(`${resultado}-`);
    for(i=1;i<arrayNum.length;i++){
        resultado-=arrayNum[i];
        process.stdout.write(`${arrayNum[i]}`);
        if(i!=arrayNum.length-1){
            process.stdout.write("-");
        }
    }
    console.log(`=${resultado}`);
}
function multiplicarNumeros(){
    let arrayNum=leerNumeros(), resultado=1;
    for(i=0;i<arrayNum.length;i++){
        resultado*=arrayNum[i];
        process.stdout.write(`${arrayNum[i]}`);
        if(i!=arrayNum.length-1){
            process.stdout.write("*");
        }
    }
    console.log(`=${resultado}`);
}
function dividirNumeros(){
    let arrayNum=leerNumeros(), resultado=arrayNum[0], bandError=0;
    for(i=1;i<arrayNum.length;i++){
        if(arrayNum[i]===0){
            bandError=1;
            i=arrayNum.length;
        }
    }
    if(bandError===0){
        process.stdout.write(`${resultado}/`);
        for(i=1;i<arrayNum.length;i++){
            resultado/=arrayNum[i];
            process.stdout.write(`${arrayNum[i]}`);
            if(i!=arrayNum.length-1){
                process.stdout.write("/");
            }
        }
        console.log(`=${resultado}`);
    }
    else{
        console.log("ERROR: no puede haber un cero en el denominador.");
    }
}
do{
    mensajeMenu();
    menu=teclado("tu opción elegida: ");
    switch(menu){
        case "1":
            sumarNumeros();
            break;
        case "2":
            restarNumeros();
            break;
        case "3":
            multiplicarNumeros();
            break;
        case "4":
            dividirNumeros();
            break;
        case "5":
            console.log("programa finalizado.");
            break;
        default:
            console.log("Opción inválida");
            break;
    }
}while(menu !="5");
