export class Operaciones {
    static sumarNumeros(arraynumeros, resultado) {
        resultado = 0;
        for (let i = 0; i < arraynumeros.length; i++) {
            resultado += arraynumeros[i];
            process.stdout.write(`${arraynumeros[i]}`);
            if (i != arraynumeros.length - 1) {
                process.stdout.write("+");
            }
        }
        return resultado;
    }
    static restarNumeros(arraynumeros, resultado) {
        resultado = arraynumeros[0];
        process.stdout.write(`${resultado}-`);
        for (let i = 1; i < arraynumeros.length; i++) {
            resultado -= arraynumeros[i];
            process.stdout.write(`${arraynumeros[i]}`);
            if (i != arraynumeros.length - 1) {
                process.stdout.write("-");
            }
        }
        return resultado;
    }
    static multiplicarNumeros(arraynumeros, resultado) {
        resultado = 1;
        for (let i = 0; i < arraynumeros.length; i++) {
            resultado *= arraynumeros[i];
            process.stdout.write(`${arraynumeros[i]}`);
            if (i != arraynumeros.length - 1) {
                process.stdout.write("*");
            }
        }
        return resultado;
    }
    static dividirNumeros(arraynumeros, resultado) {
        let bandError = 0;
        let i = 0;
        resultado = arraynumeros[0];
        for (i = 1; i < arraynumeros.length; i++) {
            if (arraynumeros[i] === 0) {
                bandError = 1;
                i = arraynumeros.length;
            }
        }
        if (bandError === 0) {
            process.stdout.write(`${resultado}/`);
            for (i = 1; i < arraynumeros.length; i++) {
                resultado /= arraynumeros[i];
                process.stdout.write(`${arraynumeros[i]}`);
                if (i != arraynumeros.length - 1) {
                    process.stdout.write("/");
                }
            }
            return resultado;
        }
        else {
            return NaN;
        }
    }
}
