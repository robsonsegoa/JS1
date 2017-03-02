var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(){

	event.preventDefault(); // impede comportamento padrão

	var campoNome = document.querySelector("#campo-nome");
	var campoPeso = document.querySelector("#campo-peso");
	var campoAltura = document.querySelector("#campo-altura");

	var pacienteNovo = "<tr class='paciente'>"+
							"<td class='info-nome'>"+ campoNome.value +"</td>"+
							"<td class='info-peso'>"+ campoPeso.value +"</td>"+
							"<td class='info-altura'>"+ campoAltura.value +"</td>"+
                           "<td class='info-imc'>"+campoPeso.value/(campoAltura.value*campoAltura.value)+"</td>"+
						"</tr>";

	//var tabela = document.querySelectorAll("table"); //retorna ARRAY

	var tabela = document.querySelector("table"); //primeiro elemento ao invez de array
//	tabela.innerHTML = tabela.innerHTML + pacienteNovo;
	tabela.innerHTML += pacienteNovo;
	campoNome.value = "";
	campoPeso.value = "";
	campoAltura.value = "";

});