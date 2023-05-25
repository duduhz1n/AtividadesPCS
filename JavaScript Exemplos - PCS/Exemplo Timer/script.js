function iniciarTempo() {
    var temposeg = document.getElementById("tempo").value;
    tempo = temposeg*1000
    setTimeout(function() { alerta();}, tempo);
}

function alerta() {
	alert("O tempo acabou!");
}