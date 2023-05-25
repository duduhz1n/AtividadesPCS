function nomedaFuncao() {
        let name = document.getElementById("name").value;
		idade= document.getElementById("idade").value;
		if (idade >= 18) {
			alert("Seja Bem-vindo, " + name + ". Pela idade enviada consta que você é maior de Idade");
		}
		else{
			alert("Seja Bem-vindo, " + name + ". Pela idade enviada consta que você é menor de Idade");
		}
}

