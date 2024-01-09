const prompt = require('prompt-sync')({sigint: true});

console.log("Bienvenido a esta sencilla calculadora.");
function calculadorapro(){
let numero1 = prompt('Porfavor, introcude el priemr numero: ');
let operador = prompt('introduce el operado, puede ser + para suma,  - para resta,  / para dividir o * para multiplicar: ');
let numero2 = prompt('Inducame el segundo numero:  ')
Number(numero1)
Number(numero2)

if (operador === '+') {
    resultado = Number(numero1) + Number(numero2)
    console.log(numero1, operador, numero2, "=", resultado);
}if(operador === '-'){
    resultado = Number(numero1) - Number(numero2)
    console.log(numero1, operador, numero2, "=", resultado);
}if(operador === '/'){
    if(Number(numero2) === 0){
        console.log('no es possible dividir entre 0')
    }else{
        resultado = Number(numero1) / Number(numero2)
        console.log(numero1, operador, numero2, "=", resultado);
    }
}if(operador === '*'){
    resultado = Number(numero1) * Number(numero2)
    console.log(numero1, operador, numero2, "=", resultado);
}

let respuesta = prompt('¿Deseas hacer una nueva operación? SI/NO?   ');

let respuestaMayusculas = respuesta.toUpperCase()

if(respuestaMayusculas === "SI"){
    console.log('Aqui empieza tu nueva operación.')
    calculadorapro()
}else{
    console.log('¡Muchas gracias hasta la proxima!')
};

};
calculadorapro();
