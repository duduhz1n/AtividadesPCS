/* Atividade 27 - PCS - Javascript */

var carro = { 
	marca: "Fiat",
	modelo: "Uno",
	ano: 2000,
	cor: "Branco",
	informacoes: function () {
		console.log (
		"O carro é um " + this.marca + ", " + 
		"modelo " + this.modelo + ", " + 
		"ano " + this.ano + ", "  +
		"cor " + this.cor
		)
}
}

carro.informacoes()
O carro é um Fiat, modelo Uno, ano 2000, cor Branco

