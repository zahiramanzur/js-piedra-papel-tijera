const imgPlayerChoice = document.getElementById('imgPlayerChoice');
const imgComputerChoice = document.getElementById('imgComputerChoice');
const pResultado = document.getElementById('pResultado');
const pElemResultado = document.getElementById('elemResultado');
const pElemContra = document.getElementById('elemContra');
const pGanadas = document.getElementById('ganadas');
const pPerdidas = document.getElementById('perdidas');
const buttons = document.querySelectorAll('button');
const choices = ["piedra", "papel", "tijera"];//0,1,2
const fileNames = {
	'piedra': 'images/rock.png',
	'papel': 'images/paper.png',
	'tijera':'images/scissors.png'
}
var contPlay = 0;
var contComp = 0;
buttons.forEach(
	(button) =>	button.addEventListener('click', startGame)
);
function startGame(event){
	//seleccion de boton(usuario)
	const buttonPress = event.currentTarget;
	const playerChoice = buttonPress.dataset.choice;
	console.log(playerChoice);
	//seleccion de elemento(computadora)
	const computerChoice = getComputerChoice();
	console.log(computerChoice);
	//determinar quien gana
	const winPlayer = winPlayers(playerChoice, computerChoice);
	console.log(winPlayer);
	//cambiar la imagen de lo que se está jugando en section id="game-zone"
	imgPlayerChoice.setAttribute('src', fileNames[playerChoice]);
	imgComputerChoice.setAttribute('src', fileNames[computerChoice]);

	pElemResultado.innerHTML = `${playerChoice}`;
	pElemContra.innerHTML = `${computerChoice}`;
	pGanadas.innerHTML = `${contPlay} `;
	pPerdidas.innerHTML = `${contComp} `;
	
	//mostrar resultados
	let result;
	
	if(winPlayer == 'player'){
		
		result = 'ganas';
		++contPlay;
	}else if(winPlayer == 'computer'){
		
		result = 'pierdes';
		++contComp;
	}else{
		result = 'empatas';

	}
	pResultado.innerHTML = `${result}`;
	console.log('p'+contPlay);
	console.log('c'+ contComp);
}

function getComputerChoice(){
	//obtener valor aleatorio
	const i = parseInt(Math.random()*3);
	return choices[i];
}

function winPlayers(playerChoice, computerChoice){
	if(playerChoice == computerChoice){
		return'empate';
	}else if(playerChoice === 'piedra'){
		
		if(computerChoice === 'tijera'){
			return 'player';
		}return 'computer';

	}else if(playerChoice ==='papel'){

		if(computerChoice ==='piedra'){
			return 'player';
		}return 'computer';

	}else{
		if(computerChoice ==='papel'){
			return 'player';
		}return 'computer';
	}
	
}