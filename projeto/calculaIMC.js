
//var tdPeso = document.getElementById("peso-2");
//var tdAltura = document.getElementById("altura-2");
//var tdNome = document.getElementById("nome-2");

//var peso2 = tdPeso.textContent;
//var altura2 = tdAltura.textContent;
//var nome2 = tdNome.textContent; 

//var paciente2 = {
//		"nome": nome2,
//		"peso": peso2,
//		"altura": altura2};

//var tdPeso = document.getElementById("peso-1");
//var tdAltura = document.getElementById("altura-1");
//var tdNome = document.getElementById("nome-1");

//var peso1 = tdPeso.textContent;
//var altura1 = tdAltura.textContent;
//var nome1 = tdNome.textContent; 


//var paciente1 = {
//		"nome": nome1,
//		"peso": peso1,
//		"altura": altura1};

//var pacientes = [paciente1,paciente2];

var trPacientes = document.getElementsByClassName('paciente');



//console.log(pacientes[0].altura);

for(var posicaoAtual = 0;posicaoAtual <= trPacientes.length -1; posicaoAtual++){

	var pacienteTr = trPacientes[posicaoAtual];

	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	var paciente = {
		"nome": tdNome.textContent,
		"peso": tdPeso.textContent,
		"altura": tdAltura.textContent};

	if(paciente.altura != 0){
	    var imc = paciente.peso / (paciente.altura * paciente.altura);

	    var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
	    tdImc.textContent = imc;
	    console.log(imc);
	} else{
	    console.log("Não posso executar uma divisão por 0!");
	}
}