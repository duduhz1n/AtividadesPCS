var add = '';

function adiciona(){
	add = document.getElementById("tarefa").value;
	
	var item = document.createElement("li");
	var els = document.getElementsByTagName("ul");
	els[0].appendChild(item);
	item.innerHTML = add;
}

function apagar(){
	if (confirm("Deseja excluir o seguinte item da lista?")) {
	add = document.getElementById("tarefa").value;
	
    var dl = document.getElementById("lista");
    var dli = dl.getElementsByTagName("li");
    dl.removeChild(dli[add-1]);
	}
	else{
		console.log("Ação cancelada pelo usúario.");
	}
}