function adicionacao() {
    var add = document.getElementById("item").value;

    var item = document.createElement("li");
    var dogsList = document.getElementById("dogs_list");
    dogsList.appendChild(item);
    item.innerHTML = add;
}

function adicionagato() {
    var add = document.getElementById("item").value;

    var item = document.createElement("li");
    var catsList = document.getElementById("cats_list");
    catsList.appendChild(item);
    item.innerHTML = add;
}

function apagarcao() {
	var add = document.getElementById("item").value;
    var dl = document.getElementById("dogs_list");
    var dli = dl.getElementsByTagName("li");
    dl.removeChild(dli[add-1]);
}

function apagargato() {
	var addgato = document.getElementById("itemgato").value;
    var cl = document.getElementById("cats_list");
    var cli = cl.getElementsByTagName("li");
    cl.removeChild(cli[addgato-1]);
}
