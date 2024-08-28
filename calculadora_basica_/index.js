const teclado=require("prompt-sync")();
const mensajeMenu= () => {console.log("MENÚ DE CALCULADORA\n1. SUMAR DOS NÚMEROS\n2. RESTAR DOS NÚMEROS\n3. MULTIPLICAR DOS NÚMEROS\n4. DIVIDIR DOS NÚMEROS\n5. SALIR")};
function leerNumeros(){
    let alerta=0, p, s;
    let arrayAux=[];
    do{ 
        if(alerta!=0){
            console.log("ERROR: ingresó algún valor inválido");
        }
        console.log("Ingrese el primer término");
        p = teclado("Su número: ");
        p=parseFloat(p, 10);
        arrayAux[0]=p;
        console.log("Ingrese el segundo término");
        s = teclado("Su número: ");
        s=parseFloat(s, 10);
        arrayAux[1]=s;
        alerta++;
    }while(isNaN(p) || isNaN(s));
    return arrayAux;
};
function sumarNumeros(){
    let arrayNum=leerNumeros();
    console.log(`${arrayNum[0]}+${arrayNum[1]}=${arrayNum[0]+arrayNum[1]}`);
}
function restarNumeros(){
    let arrayNum=leerNumeros();
    console.log(`${arrayNum[0]}-${arrayNum[1]}=${arrayNum[0]-arrayNum[1]}`);
}
function multiplicarNumeros(){
    let arrayNum=leerNumeros();
    console.log(`${arrayNum[0]}*${arrayNum[1]}=${arrayNum[0]*arrayNum[1]}`);
}
function dividirNumeros(){
    let arrayNum=leerNumeros();
    if(arrayNum[1]===0){
        console.log("ERROR: no se permite la división por cero.");
    }
    else{
        console.log(`${arrayNum[0]}/${arrayNum[1]}=${arrayNum[0]/arrayNum[1]}`);
    }
}
let menu;
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
