// Declaracion de variables
let name = prompt("Indica un string")

/* Ej1 - Comprueba si un string contiene el substring 'As' al principio. Si lo contiene, devuelve el string original. 
         Sino, devuelve el string con 'As' concatenado al principio de este.*/

function includeASonString(name){
    if (name.substring(0,1) == "As"){
        return name
    }
    else {
        let result = "As" + name
        return result
    }
}
console.log(includeASonString("hola" + name))

/* Ej2 -Introduce un string y un número, comprueba que es menor que la longitud del string en una función. La función 
        debe devolver el string sin el carácter en esa posición.*/ 

/* Ej3 - Dado un string intercambia la posición del primer y último caracter del string. Tienes que comprobar que el 
         string tiene longitud mayor que 0.*/