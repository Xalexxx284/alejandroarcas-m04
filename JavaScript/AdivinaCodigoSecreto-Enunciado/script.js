// -------------------------------------------------------------- DECLARACION DE VARIABLES -------------------------------------------------------------- //
const code = [];
const maxTry = 5;

// ------------------------------------------------------------------- SECCION CODIGO ------------------------------------------------------------------- //

/* 1. Inicialmente hay * en cada celda, pero cuando haya acabado el programa saldrá el número.*/

function secretCode(code) {
    for (let i = 0; i < 5; i++) {
        let newNumber = Math.floor(Math.random() * 10 + 1);
        code.push(newNumber);  
    }
    return code
}
console.log(secretCode(code))

// ------------------------------------------------------------------ SECCION COMPROBAR ----------------------------------------------------------------- //

/* 1. Generar celdas de resultado */

function generateResultCells(){
    const divRow = document.getElementById("Result");
    let createElement = document.createElement("div");
    
    createElement.className = "rowResult"

    createELement.addEventListener('click')
    

    document.divRow.appendChild(createElement);

}


/* 2. Input dónde el usuario pondrá los 5 dígitos. Inicialmente hay 01234, pero se borrará y cogerá el foco en cada iteración. */

/* 3. Botón que lanza la función que verifica si la propuesta indicada por el usuario es válida o no. */



// -------------------------------------------------------------------- SECCION INFO -------------------------------------------------------------------- //



// ------------------------------------------------------------------- SECCION RESULT ------------------------------------------------------------------- //