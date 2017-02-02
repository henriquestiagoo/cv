
/* Game initial related */

var inicial = true;

function niveis(){	
	if(nivel == 1){
		inicial = true;
		reset();
		runWebGL();
		document.getElementById("nivel").src="imgs/nivel1.png";
		document.getElementById("nivel_2").src="imgs/nivel1_2.png";
		document.getElementById("nome_nivel").innerHTML="Nível 1: ";
		document.getElementById("points").innerHTML=points;
		document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
		document.getElementById("figura1").innerHTML="pirâmide";
		document.getElementById("figura2").innerHTML="cubo";

	}
	if(nivel == 2){
		inicial = true;
		reset();
		runWebGL();
		document.getElementById("nivel").src="imgs/nivel2.png";
		document.getElementById("nivel_2").src="imgs/nivel2_2.png";
		document.getElementById("nome_nivel").innerHTML="Nível 2: ";
		document.getElementById("points").innerHTML=points;
		document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
		document.getElementById("figura1").innerHTML="estrela";
		document.getElementById("figura2").innerHTML="pirâmide"
	}
	if(nivel == 3){
		inicial = true;
		reset();
		runWebGL();
		document.getElementById("nome_nivel").innerHTML="Nível 3: ";
		document.getElementById("nivel_2").src="imgs/nivel3_2.png";
		document.getElementById("nivel").src="imgs/nivel3.png";
		document.getElementById("points").innerHTML=points;
		document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
		document.getElementById("figura1").innerHTML="Pirâmide";
		document.getElementById("figura2").innerHTML="Cubo";
	}else{
		// Mostrar os pontos
		// Acabaste o jogo!!
	}
}