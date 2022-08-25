const displayValorAnterior = document.getElementByid("valor-anterior");
const displayValorActual = document.getElementByid("valor-actual"); 

const botonesNemeros = document.querySelectorAll("numero");
const botonesoperador = document.querySelectorAll("operador");




class  Calculadora{

function calculadora(a , b){
    suma = (a + b);

    return suma;

}

function calculadora(a , b){
    resta = (a - b);

    return resta;

}

function calculadora(a , b){
    multiplicacion = (a * b);

    return multiplicacion;

}

function calculadora(a , b){
    division = (a / b);

    return division;

}

}