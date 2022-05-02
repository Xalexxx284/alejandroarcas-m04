const codigo = [];
const maxIntento = 8;

/*1. Genera una constante CODIGO_SECRETO de tipo array de 5 número aleatorios entre 0 y 9 usando la libreria Math.random();*/
function codigoSecreto() {
    for (let i = 0; i < 5; i++) {
        let newNumber = Math.floor(Math.random() * 10 + 1);
        codigo.push(newNumber);  
    }
    return codigo
}
codigoSecreto();

