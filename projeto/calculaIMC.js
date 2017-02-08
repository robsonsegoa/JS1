

var trPacientes = document.getElementsByClassName('paciente');



//console.log(pacientes[0].altura);

for(var posicaoAtual = 0;posicaoAtual <= trPacientes.length -1; posicaoAtual++){

	var pacienteTr = trPacientes[posicaoAtual];

	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

	var pacienteAtual = {
		nome: tdNome.textContent,
		peso: tdPeso.textContent,
		altura: tdAltura.textContent,
		pegaImc: function(){
			if(this.altura != 0){	

				var imc = this.peso / (this.altura + this.altura);
				return imc;

				console.log(this.peso);
				console.log(this.altura);

			}else{
				console.log("Não posso exetutar a divisão por O (zero)");
			}
		}
	};

		var imc = pacienteAtual.pegaImc();

		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
	    tdImc.textContent = imc;
	    
	    console.log(imc);


}

