var carro = ""; // Declarar a variavel "CARRO" como uma string vazia // 
var vetorCarros = []; // Declaração do vetor mas tambem vazio //
var stringCarros = ""; // Declarar a variavel "stringCarros" como uma string vazia //

function preencheObjeto() { // Declaração e inicio da função preencheObjeto //
    var Marca = document.getElementById("txtMarca").value; // A variavel MARCA recebera os valores que estão armazenados do HTML "txtMarca" //
    var Modelo = document.getElementById("txtModelo").value; // A variavel Modelo recebera os valores que estão armazenados do HTML "txtModelo" //
    var Ano = parseInt(document.getElementById("txtAno").value); // A variavel Ano recebera os valores que estão armazenados do HTML "txtAno" //
    var Cor = document.getElementById("txtCor").value; // A variavel Cor recebera os valores que estão armazenados do HTML "txtMarca" //

    carro = "Marca: " + Marca + ", Modelo: " + Modelo + ", Ano: " + Ano + ", Cor: " + Cor; // A variavel carro ira receber todas as variaveis para aparecer no HTML //
    vetorCarros.push(carro); // O Vetor ira conter todo o conteudo da variavel carro //

    limpaTxt(); // Função chamada limpatxt //
} // Fim da função preencheObjeto //

function mostrarCarro() { // Declaração e inicio da função mostrarCarro //
	stringCarros = vetorCarros.join('<br>'); // stringCarros ira receber o vetor e irá quebrar a linha logo a seguir
	
    var lblMostrarCarro = document.getElementById("lblMostrarCarro"); // A variavel lblMostrarCarro recebera os valores que estão armazenados do HTML "lblMostrarCarro" //
    lblMostrarCarro.innerHTML = stringCarros; // a variavel lblMostrarCarro ira receber todo conteudo da stringCarros //

} // Fim da função mostrarCarro //

function limpaTxt() {
    document.getElementById("txtMarca").value = ""; // Limpar o campo de digitação da MARCA //
    document.getElementById("txtModelo").value = ""; // Limpar o campo de digitação do Modelo //
    document.getElementById("txtAno").value = ""; // Limpar o campo de digitação do Ano //
    document.getElementById("txtCor").value = ""; // Limpar o campo de digitação da Cor //
} // Fim da função preencheObjeto //