/* Atividade 27 - PCS - Javascript */

var carro = ""
function receberDados () {
	carro = {
	marca: document.getElementById("marca").value,
	modelo: document.getElementById("modelo").value,
	ano: parseInt(document.getElementById("ano").value),
	cor: document.getElementById("cor").value
}
}

function imprime() {
	var result =  document.getElementById("result");
	result.innerHTML = ("O carro é um " + carro.marca + ", " + 
		"modelo " + carro.modelo + ", " + 
		"ano " + carro.ano + ", "  +
		"cor " + carro.cor + ".");
}
