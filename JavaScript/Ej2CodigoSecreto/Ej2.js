// Ej1

function generateArrayWithRandomNumbers(){
	let codigoSecreto = [];
	let bucle = true;

	while (bucle) {	
		let numbers = Math.floor((Math.random() * 10) + 1)
		codigoSecreto.push(numbers)
		if (codigoSecreto.length == 5){
			bucle = false;
		}
	}
	return document.writeln(codigoSecreto)
}
console.log(generateArrayWithRandomNumbers())


// Ej2

function verificarNumerosIguales(){

}
