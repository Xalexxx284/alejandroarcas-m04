let num1 = parseInt(prompt("Indica el numero 1:"))
let num2 = parseInt(prompt("Indica el numero 2:"))
let num3 = parseInt(prompt("Indica el numero 3:"))

// Ej1 - Haz una función que de dos números pasados por parámetros indica (saca por consola) cual de ellos es mayor.

function greaterThan(num1, num2){

    if (num1 > num2){
        return num1
    }
    else {
        return num2
    }
}
console.log(greaterThan(num1, num2))

//Ej2 - Haz una función que calcule (sin usar *) la multiplicación de dos números

function calculateMultiplyWithTwoNumbers(num1, num2){

    let result = 0

    for (let i= 0; i < num2; i++){
       result += num1
    }
    return result
}
console.log(calculateMultiplyWithTwoNumbers(num1, num2))

//Ej3 - Utilizando la función anterior haz una función que calcule la multiplicación de 3 números.

function calculateMultiplyWithThreeNumbers(num1, num2, num3){
    
    let result = 0
    let result2 = 0

    for (let i = 0; i < num2; i++){
        result += num1
    }
    for (let j = 0; j < num3; j++){
        result2 += result
    }
    return result2
}
console.log(calculateMultiplyWithThreeNumbers(num1, num2, num3))

/*Ej4 - Encuentra entre los primeros 10.000 números naturales los números que completan la siguiente propiedad: 
        El cubo de la suma de sus cifras cifras es igual al mismo número*/


