var add = '';

function adiciona(){
	add = document.getElementById("item").value;
	
	var item = document.createElement("li");
	var els = document.getElementsByTagName("ul");
	els[0];
	els[0].appendChild(item);
	item.innerHTML = add;
}
