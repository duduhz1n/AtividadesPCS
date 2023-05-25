 var carro="";
 var vetorCarros = [];
 var stringCarros = "";

function preencheObjeto(){
	
       var Marca  = " Marca: " + document.getElementById("txtMarca").value;
       var Modelo = " Modelo: " + document.getElementById("txtModelo").value;
       var Ano = " Ano: " + parseInt(document.getElementById("txtAno").value);
       var Cor = " Cor: " + document.getElementById("txtCor").value;
        
	   carro = [Marca, Modelo, Ano, Cor];
	   
	   vetorCarros.push(carro);
	   
	   limpaTxt();
	   
}

function mostrarCarro(){
	stringCarros = vetorCarros.join('<br> <br>');
	
    var lblMostrarCarro = document.getElementById("lblMostrarCarro");
    lblMostrarCarro.innerHTML = stringCarros; 
}

function limpaTxt() {
	document.getElementById("txtMarca").value = "";
	document.getElementById("txtModelo").value = "";
	document.getElementById("txtAno").value = "";
	document.getElementById("txtCor").value = "";
}

  