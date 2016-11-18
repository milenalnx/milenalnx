window.onload = function(){ 

	var randomico;

	novoJogo();

	function novoJogo(){
		randomico = Math.floor((Math.random() * 100) + 1);
		console.log(randomico);
		document.getElementById('tinput').value = "";
		document.getElementById('pontos').style.display = 'none';
		document.getElementById('pontos').innerHTML = "Previous guesses: ";
		document.getElementById('novoJogo').style.display = 'none';
		document.getElementById('retorno').style.display = 'none';
	}

	document.getElementById('novoJogo').onclick = function (){
		novoJogo();
	}

	document.getElementById('sbutton').onclick = function (){

		document.getElementById('retorno').style.display = 'block';
		document.getElementById('pontos').style.display = 'block';
		var userInput = document.getElementById('tinput').value;
		document.getElementById('tinput').value = "";
		document.getElementById('pontos').innerHTML += userInput + " ";

		if(userInput == randomico){
			document.getElementById('retorno').style.backgroundColor = '#88ed6f';
			document.getElementById('retorno').innerHTML = "Parabéns, você acertou!";
			document.getElementById('novoJogo').style.display = 'block';
		}
		else if (userInput < randomico){
			document.getElementById('retorno').style.backgroundColor = '#ff2b2b';
			document.getElementById('retorno').innerHTML = "Quase! tente um número maior!";
		}
		else{
			document.getElementById('retorno').style.backgroundColor = '#ff2b2b';
			document.getElementById('retorno').innerHTML = "Está Perto! tente um número menor!";
		}

	}

};