
/* Events related */

function setEventListeners(canvas){

	canvas.onmousedown = handleMouseDown;

    document.onmouseup = handleMouseUp;

    document.onmousemove = handleMouseMove;

    function handleKeyDown(event) {
		
        currentlyPressedKeys[event.keyCode] = true;
    }

    function handleKeyUp(event) {
		
        currentlyPressedKeys[event.keyCode] = false;
    }

	document.onkeydown = handleKeyDown;
    
    document.onkeyup = handleKeyUp;   

    document.getElementById("move-left-button").onclick = function(){	
    	swal("Tem de selecionar uma figura!!");
    }

    document.getElementById("move-right-button").onclick = function(){	
    	swal("Tem de selecionar uma figura!!");
    }

    document.getElementById("move-up-button").onclick = function(){	
    	swal("Tem de selecionar uma figura!!");
    }

    document.getElementById("move-down-button").onclick = function(){	
    	swal("Tem de selecionar uma figura!!");
    }

    document.getElementById("move-front-button").onclick = function(){	
    	swal("Tem de selecionar uma figura!!");
    }

    document.getElementById("move-back-button").onclick = function(){	
    	swal("Tem de selecionar uma figura!!");
    }

    document.getElementById("rotate-xx-up").onclick = function(){	
    	swal("Tem de selecionar uma figura!!");
    }

    document.getElementById("rotate-xx-down").onclick = function(){	
    	swal("Tem de selecionar uma figura!!");
    }

    document.getElementById("rotate-yy-right").onclick = function(){	
    	swal("Tem de selecionar uma figura!!");
    }

    document.getElementById("rotate-yy-left").onclick = function(){	
    	swal("Tem de selecionar uma figura!!");
    }

    document.getElementById("rotate-zz-cw").onclick = function(){	
    	swal("Tem de selecionar uma figura!!");
    }

    document.getElementById("rotate-zz-ccw").onclick = function(){	
    	swal("Tem de selecionar uma figura!!");
    }

	// Button events
	document.getElementById("figura1").onclick = function(){
		figura1_on = 1;
		figura2_on = 0;
		figura3_on = 0;
		if(document.getElementById("figura1").innerHTML=="pirâmide"){
			getBarsReset(1,0,0,0,0,0,0,0);
		}else if(document.getElementById("figura1").innerHTML=="estrela"){
			getBarsReset(0,0,1,0,0,0,0,0);
		}else if(document.getElementById("figura1").innerHTML=="Pirâmide"){
			getBarsReset(0,0,0,0,0,1,0,0);
		}
		getVisibleBars();
		document.getElementById("move-left-button").onclick = function(){			
			if(nivel == 1){		
				if(tx1 > limite_esq){
					tx1 -= 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene();
				}
			}
			else if(nivel == 2){
				if(tx1 > limite_esq){
					tx1 -= 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene();
				}
			}
			else if(nivel == 3){
				if(tx1 > limite_esq){
					tx1 -= 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"

				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene();
				}
			}			  
		};

		document.getElementById("move-right-button").onclick = function(){		
			if(nivel == 1){
				if(tx1 < limite_dir){
					tx1 += 0.05;		
				}	
				var tentativa = verificarPosicaoTx(tx1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
				swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene();
				}
			}
			else if(nivel == 2){
				if(tx1 > limite_esq){
					tx1 += 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene();
				}
			}
			else if(nivel == 3){
				if(tx1 > limite_esq){
					tx1 += 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene();
				}
			}				  
		};

		document.getElementById("move-up-button").onclick = function(){			
			if(nivel == 1){
				if(ty1 < limite_sup){
					ty1 += 0.05;	
				}
				var tentativa = verificarPosicaoTy(ty1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				if(ty1 < limite_sup){
					ty1 += 0.05;	
				}
				var tentativa = verificarPosicaoTy(ty1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				if(ty1 < limite_sup){
					ty1 += 0.05;	
				}
				var tentativa = verificarPosicaoTy(ty1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"				
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}		 
		};

		document.getElementById("move-down-button").onclick = function(){		
			if(nivel == 1){
				if(ty1 > limite_inf){
					ty1 -= 0.05;
				}	
				var tentativa = verificarPosicaoTy(ty1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				} 
			}
			else if(nivel == 2){
				if(ty1 > limite_inf){
					ty1 -= 0.05;
				}
				var tentativa = verificarPosicaoTy(ty1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				} 	
			}
			else if(nivel == 3){
				if(ty1 < limite_sup){
					ty1 -= 0.05;	
				}
				var tentativa = verificarPosicaoTy(ty1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];	
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				} 	
			}
		};


		document.getElementById("move-front-button").onclick = function(){
			if(nivel == 1){
				if(tz1 < limite_sup){
					tz1 += 0.1;
				}	
				var tentativa = verificarPosicaoTz(tz1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				if(tz1 < limite_sup){
					tz1 += 0.1;
				}
				var tentativa = verificarPosicaoTz(tz1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				if(tz1 < limite_sup){
					tz1 += 0.1;	
				}
				var tentativa = verificarPosicaoTz(tz1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}	 
		};      

		document.getElementById("move-back-button").onclick = function(){
			if(nivel == 1){
				if(tz1+block > tz_back){
					tz1 -= 0.1;
				}
				var tentativa = verificarPosicaoTz(tz1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene();
				}
			}
			else if(nivel == 2){
				if(tz1+block > tz_back){
					tz1 -= 0.1;
				}
				var tentativa = verificarPosicaoTz(tz1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene();
				}
			}
			else if(nivel == 3){
				if(tz1+block > tz_back){
					tz1 -= 0.1;	
				}
				var tentativa = verificarPosicaoTz(tz1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene();
				}
			}		  
		};

		document.getElementById("rotate-xx-up").onclick = function(){				
			if(nivel == 1){			
				angleXX1 -= 45;
				if(angleXX1 == 360 || angleXX1 == -360){
					angleXX1 = 0;
				}			
				var tentativa = verificarPosicaoAngleXX(angleXX1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){

				angleXX1 -= 45;
				if(angleXX1 == 360 || angleXX1 == -360){
					angleXX1 = 0;
				}
				var tentativa = verificarPosicaoAngleXX(angleXX1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				angleXX1 -= 45;
				if(angleXX1 == 360 || angleXX1 == -360){
					angleXX1 = 0;
				}
				var tentativa = verificarPosicaoAngleXX(angleXX1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}			 
		};
		
		document.getElementById("rotate-xx-down").onclick = function(){		
			if(nivel == 1){			
				angleXX1 += 45;
				if(angleXX1 == 360 || angleXX1 == -360){
					angleXX1 = 0;
				}						
				var tentativa = verificarPosicaoAngleXX(angleXX1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				angleXX1 += 45;
				if(angleXX1 == 360 || angleXX1 == -360){
					angleXX1 = 0;
				}
				var tentativa = verificarPosicaoAngleXX(angleXX1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}	
			}
			else if(nivel == 3){
				angleXX1 += 45;
				if(angleXX1 == 360 || angleXX1 == -360){
					angleXX1 = 0;
				}
				var tentativa = verificarPosicaoAngleXX(angleXX1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}	
			}	  
		};

		document.getElementById("rotate-yy-right").onclick = function(){			
			if(nivel == 1){		
				angleYY1 += 45;	
				if(angleYY1 == 360 || angleYY1 == -360){
					angleYY1 = 0;
				}	
				var tentativa = verificarPosicaoAngleYY(angleYY1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				angleYY1 += 45;	
				if(angleYY1 == 360 || angleYY1 == -360){
					angleYY1 = 0;
				}
				var tentativa = verificarPosicaoAngleYY(angleYY1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				angleYY1 += 45;
				if(angleYY1 == 360 || angleYY1 == -360){
					angleYY1 = 0;
				}
				var tentativa = verificarPosicaoAngleYY(angleYY1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}	 
		};

		document.getElementById("rotate-yy-left").onclick = function(){			
			if(nivel == 1){	
				angleYY1 -= 45;	
				if(angleYY1 == 360 || angleYY1 == -360){
					angleYY1 = 0;
				}		
				var tentativa = verificarPosicaoAngleYY(angleYY1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				angleYY1 -= 45;	
				if(angleYY1 == 360 || angleYY1 == -360){
					angleYY1 = 0;
				}
				var tentativa = verificarPosicaoAngleYY(angleYY1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				angleYY1 -= 45;
				if(angleYY1 == 360 || angleYY1 == -360){
					angleYY1 = 0;
				}
				var tentativa = verificarPosicaoAngleYY(angleYY1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}	  
		};

		document.getElementById("rotate-zz-cw").onclick = function(){		
			if(nivel == 1){		
				angleZZ1 -= 45;		
				if(angleZZ1 == 360 || angleZZ1 == -360){
					angleZZ1 = 0;
				}		
				var tentativa = verificarPosicaoAngleZZ(angleZZ1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}				
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				angleZZ1 -= 45;		
				if(angleZZ1 == 360 || angleZZ1 == -360){
					angleZZ1 = 0;
				}
				var tentativa = verificarPosicaoAngleZZ(angleZZ1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}			
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				angleZZ1 -= 45;		
				if(angleZZ1 == 360 || angleZZ1 == -360){
					angleZZ1 = 0;
				}
				var tentativa = verificarPosicaoAngleZZ(angleZZ1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}				
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}	  
		};

		document.getElementById("rotate-zz-ccw").onclick = function(){		
			if(nivel == 1){
				angleZZ1 += 45;
				if(angleZZ1 == 360 || angleZZ1 == -360){
					angleZZ1 = 0;
				}					
				var tentativa = verificarPosicaoAngleZZ(angleZZ1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}			
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				angleZZ1 += 45;
				if(angleZZ1 == 360 || angleZZ1 == -360){
					angleZZ1 = 0;
				}
				var tentativa = verificarPosicaoAngleZZ(angleZZ1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}		
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				angleZZ1 += 45;		
				if(angleZZ1 == 360 || angleZZ1 == -360){
					angleZZ1 = 0;
				}
				var tentativa = verificarPosicaoAngleZZ(angleZZ1,nivel,points,fase,jogadas_nivel,"figura1");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];	
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}			
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}	 	  
		};		      
	};

	document.getElementById("figura2").onclick = function(){
		figura2_on = 1;
		figura1_on = 0;
		figura3_on = 0;
		if(document.getElementById("figura2").innerHTML=="cubo"){
			getBarsReset(0,1,0,0,0,0,0,0);
		}else if(document.getElementById("figura2").innerHTML=="pirâmide"){
			getBarsReset(0,0,0,1,0,0,0,0);
		}else if(document.getElementById("figura2").innerHTML=="Cubo"){
			getBarsReset(0,0,0,0,0,0,1,0);
		}
		getVisibleBars();
		document.getElementById("move-left-button").onclick = function(){			
			if(nivel == 1){		
				if(tx2 > limite_inf){
					tx2 -= 0.05;		
				}	
				var tentativa = verificarPosicaoTx(tx2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				if(tx2 > limite_inf){
					tx2 -= 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				if(tx2 > limite_inf){
					tx2 -= 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}  
		};

		document.getElementById("move-right-button").onclick = function(){		
			if(nivel == 1){
				if(tx2 < limite_sup){
					tx2 += 0.05;		
				}		
				var tentativa = verificarPosicaoTx(tx2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				if(tx2 < limite_sup){
					tx2 += 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				if(tx2 < limite_sup){
					tx2 += 0.05;		
				}
				var tentativa = verificarPosicaoTx(tx2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}	  
		};

		document.getElementById("move-up-button").onclick = function(){			
			if(nivel == 1){
				if(ty2 < limite_sup){
					ty2 += 0.05;	
				}	
				var tentativa = verificarPosicaoTy(ty2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				if(ty2 < limite_sup){
					ty2 += 0.05;	
				}
				var tentativa = verificarPosicaoTy(ty2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				if(ty2 < limite_sup){
					ty2 += 0.05;	
				}
				var tentativa = verificarPosicaoTy(ty2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}	  
		};

		document.getElementById("move-down-button").onclick = function(){		
			if(nivel == 1){
				if(ty2 > limite_inf){
					ty2 -= 0.05;	
				}		
				var tentativa = verificarPosicaoTy(ty2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				if(ty2 > limite_inf){
					ty2 -= 0.05;	
				}
				var tentativa = verificarPosicaoTy(ty2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				if(ty2 < limite_sup){
					ty2 -= 0.05;	
				}
				var tentativa = verificarPosicaoTy(ty2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}		  
		};

		document.getElementById("move-front-button").onclick = function(){
			if(nivel == 1){
				if(tz2 < limite_sup){
					tz2 += 0.1;		
				}
				var tentativa = verificarPosicaoTz(tz2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				if(tz2 < limite_sup){
					tz2 += 0.1;		
				}
				var tentativa = verificarPosicaoTz(tz2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				if(tz2 < limite_sup){
					tz2 += 0.1;		
				}
				var tentativa = verificarPosicaoTz(tz2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}	 
		};      

		document.getElementById("move-back-button").onclick = function(){
			if(nivel == 1){
				if(tz2+block > tz_back){
					tz2 -= 0.1;
				}
				var tentativa = verificarPosicaoTz(tz2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				if(tz2+block > tz_back){
					tz2 -= 0.1;
				}
				var tentativa = verificarPosicaoTz(tz2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				if(tz2+block > tz_back){
					tz2 -= 0.1;
				}
				var tentativa = verificarPosicaoTz(tz2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
		};   
		
		document.getElementById("rotate-xx-up").onclick = function(){				
			if(nivel == 1){		
				angleXX2 -= 45;			
				if(angleXX2 == 360 || angleXX2 == -360){
					angleXX2 = 0;
				}
				var tentativa = verificarPosicaoAngleXX(angleXX2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}			
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				angleXX2 -= 45;			
				if(angleXX2 == 360 || angleXX2 == -360){
					angleXX2 = 0;
				}
				var tentativa = verificarPosicaoAngleXX(angleXX2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}		
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				angleXX2 -= 45;			
				if(angleXX2 == 360 || angleXX2 == -360){
					angleXX2 = 0;
				}	
				var tentativa = verificarPosicaoAngleXX(angleXX2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}			
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			} 
		};
		
		document.getElementById("rotate-xx-down").onclick = function(){		
			if(nivel == 1){		
				angleXX2 += 45;				
				if(angleXX2 == 360 || angleXX2 == -360){
					angleXX2 = 0;
				}
				var tentativa = verificarPosicaoAngleXX(angleXX2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
						  title: "Primeiro nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();	
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				angleXX2 += 45;				
				if(angleXX2 == 360 || angleXX2 == -360){
					angleXX2 = 0;
				}
				var tentativa = verificarPosicaoAngleXX(angleXX2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				angleXX2 += 45;				
				if(angleXX2 == 360 || angleXX2 == -360){
					angleXX2 = 0;
				}
				var tentativa = verificarPosicaoAngleXX(angleXX2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Terceiro nivel concluido!",
						  text: "Acabou o jogo com " + points + " pontos",
						  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"	
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}	  
		};


		document.getElementById("rotate-yy-right").onclick = function(){			
			if(nivel == 1){		
				angleYY2 += 45;		
				if(angleYY2 == 360 || angleYY2 == -360){
					angleYY2 = 0;
				}	
				var tentativa = verificarPosicaoAngleYY(angleYY2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				angleYY2 += 45;		
				if(angleYY2 == 360 || angleYY2 == -360){
					angleYY2 = 0;
				}
				var tentativa = verificarPosicaoAngleYY(angleYY2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				angleYY2 += 45;		
				if(angleYY2 == 360 || angleYY2 == -360){
					angleYY2 = 0;
				}	
				var tentativa = verificarPosicaoAngleYY(angleYY2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}  
		};

		document.getElementById("rotate-yy-left").onclick = function(){			
			if(nivel == 1){		
				angleYY2 -= 45;		
				if(angleYY2 == 360 || angleYY2 == -360){
					angleYY2 = 0;
				}
				var tentativa = verificarPosicaoAngleYY(angleYY2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				angleYY2 -= 45;		
				if(angleYY2 == 360 || angleYY2 == -360){
					angleYY2 = 0;
				}
				var tentativa = verificarPosicaoAngleYY(angleYY2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				angleYY2 -= 45;		
				if(angleYY2 == 360 || angleYY2 == -360){
					angleYY2 = 0;
				}
				var tentativa = verificarPosicaoAngleYY(angleYY2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}	  
		};

		document.getElementById("rotate-zz-cw").onclick = function(){		
			if(nivel == 1){		
				angleZZ2 -= 45;			
				if(angleZZ2 == 360 || angleZZ2 == -360){
					angleZZ2 = 0;
				}
				var tentativa = verificarPosicaoAngleZZ(angleZZ2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				angleZZ2 -= 45;			
				if(angleZZ2 == 360 || angleZZ2 == -360){
					angleZZ2 = 0;
				}
				var tentativa = verificarPosicaoAngleZZ(angleZZ2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}
				if(jogadas_nivel == 0 && nivel == 1){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				angleZZ2 -= 45;			
				if(angleZZ2 == 360 || angleZZ2 == -360){
					angleZZ2 = 0;
				}
				var tentativa = verificarPosicaoAngleZZ(angleZZ2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}
				if(jogadas_nivel == 0 && nivel == 1){
					swal({
						  title: "Jogadas disponiveis esgotadas",
						  text: "Começar do inicio",
						  imageUrl: "imgs/sadSmile.png"
					});
					reset();
				}	
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}	 
		};

		document.getElementById("rotate-zz-ccw").onclick = function(){		
			if(nivel == 1){
				angleZZ2 += 45;				
				if(angleZZ2 == 360 || angleZZ2 == -360){
					angleZZ2 = 0;
				}
				var tentativa = verificarPosicaoAngleZZ(angleZZ2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 12){
					swal({
					  title: "Primeiro nivel concluido!",
					  text: "Próximo nivel",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/correct.mp3');
					audio.play();
					background = 0;
					nivel = nivel+1;
					points_fim_nivel1 = points;
					niveis();
				}			
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 2){
				angleZZ2 += 45;				
				if(angleZZ2 == 360 || angleZZ2 == -360){
					angleZZ2 = 0;
				}
				var tentativa = verificarPosicaoAngleZZ(angleZZ2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
				}		
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}
			else if(nivel == 3){
				angleZZ2 += 45;				
				if(angleZZ2 == 360 || angleZZ2 == -360){
					angleZZ2 = 0;
				}	
				var tentativa = verificarPosicaoAngleZZ(angleZZ2,nivel,points,fase,jogadas_nivel,"figura2");
				points = tentativa[0];
				document.getElementById("points").innerHTML=points;
				fase = tentativa[1];
				jogadas_nivel = tentativa[2];
				document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
				if(acertou == 18){
					swal({
					  title: "Terceiro nivel concluido!",
					  text: "Acabou o jogo com " + points + " pontos",
					  imageUrl: "imgs/thumbs-up.jpg"
					});
					var audio = new Audio('sounds/congratulations.mp3');
					audio.play();
					document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					
				}			
				else{
					if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
					drawScene(); 
				}
			}  
		};
	};

	// Button events
	if(nivel!=1){
		if(nivel == 2){
			document.getElementById("nivel1").disabled = false;	
		}
		if(nivel == 3){
			document.getElementById("nivel2").disabled = false;
		}
		document.getElementById("nivel1").onclick = function(){
			nivel = 1;
			background = 0;
			var x = document.getElementById("figura3");
			document.getElementById("choose_fig").removeChild(x);
			niveis();
		};
		document.getElementById("nivel2").onclick = function(){
			nivel = 2;
			background = 0;
			niveis();
		};
		document.getElementById("nivel3").onclick = function(){
			nivel = 3;
			background = 1;
			niveis();
		};
		document.getElementById("figura3").onclick = function(){
			figura1_on = 0;
			figura2_on = 0;
			figura3_on = 1;
			if(document.getElementById("figura3").innerHTML=="paralelipipedo"){
				getBarsReset(0,0,0,0,1,0,0,0);
			}else if(document.getElementById("figura3").innerHTML=="Paralelipipedo"){
				getBarsReset(0,0,0,0,0,0,0,1);
			}	
			getVisibleBars();
			document.getElementById("move-left-button").onclick = function(){			
				if(nivel == 2){		
					if(tx3 > limite_esq){
						tx3 -= 0.05;		
					}
					var tentativa = verificarPosicaoTx(tx3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	

				}else if(nivel == 3){
					if(tx3 > limite_inf){
						tx3 -= 0.1;		
					}	
					var tentativa = verificarPosicaoTx(tx3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
							title: "Terceiro nivel concluido!",
						  	text: "Acabou o jogo com " + points + " pontos",
						  	imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/congratulations.mp3');
						audio.play();
						document.getElementById("nivel3").disabled = false;
						points_fim_nivel3 = points;
						document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  
				}
			};	

			document.getElementById("move-right-button").onclick = function(){		
				// Updating	
				if(nivel==2){
					if(tx3 < limite_sup){
						tx3 += 0.1;		
					}
					var tentativa = verificarPosicaoTx(tx3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  

				}else if(nivel == 3){
					if(tx3 < limite_sup){
						tx3 += 0.1;		
					}		
					var tentativa = verificarPosicaoTx(tx3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
							  title: "Terceiro nivel concluido!",
						  text: "Acabou o jogo com " + points + " pontos",
						  imageUrl: "imgs/thumbs-up.jpg" 
						});
						var audio = new Audio('sounds/congratulations.mp3');
						audio.play();
						document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  
				}
			};

			document.getElementById("move-up-button").onclick = function(){			
				// Updating	
				if(nivel == 2){
					if(ty3 < limite_sup){
						ty3 += 0.05;	
					}	
					var tentativa = verificarPosicaoTy(ty3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  
				}else if(nivel == 3){
					if(ty3 < limite_sup){
						ty3 += 0.05;	
					}	
					var tentativa = verificarPosicaoTy(ty3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
							  title: "Terceiro nivel concluido!",
						  text: "Acabou o jogo com " + points + " pontos",
						  imageUrl: "imgs/thumbs-up.jpg" 
						});
						var audio = new Audio('sounds/congratulations.mp3');
						audio.play();
						document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  
				}
			};	

			document.getElementById("move-down-button").onclick = function(){		
				// Updating	
				if(nivel == 2){
					if(ty3 > limite_inf){
						ty3 -= 0.05;	
					}		
					var tentativa = verificarPosicaoTy(ty3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  

				}else if(nivel == 3){
					if(ty3 > limite_inf){
						ty3 -= 0.05;	
					}		
					var tentativa = verificarPosicaoTy(ty3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
							  title: "Terceiro nivel concluido!",
						  text: "Acabou o jogo com " + points + " pontos",
						  imageUrl: "imgs/thumbs-up.jpg" 
						});
						var audio = new Audio('sounds/congratulations.mp3');
						audio.play();
						document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  
				}
				
			};	

			document.getElementById("move-front-button").onclick = function(){
				// Updating
				if(nivel == 2){
					if(tz3 < limite_sup){
						tz3 += 0.1;		
					}
					var tentativa = verificarPosicaoTz(tz3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	 

				}else if(nivel == 3){
					if(tz3 < limite_sup){
						tz3 += 0.1;		
					}
					var tentativa = verificarPosicaoTz(tz3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
							  title: "Terceiro nivel concluido!",
						  text: "Acabou o jogo com " + points + " pontos",
						  imageUrl: "imgs/thumbs-up.jpg" 
						});
						var audio = new Audio('sounds/congratulations.mp3');
						audio.play();
						document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	 
				}
			}; 

			document.getElementById("move-back-button").onclick = function(){
				if(nivel == 2){
					if(tz3+block > tz_back){
						tz3 -= 0.1;
					}
					var tentativa = verificarPosicaoTz(tz3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	   

				}else if(nivel == 3){
					if(tz3+block > tz_back){
						tz3 -= 0.1;
					}
					var tentativa = verificarPosicaoTz(tz3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
							  title: "Terceiro nivel concluido!",
						  text: "Acabou o jogo com " + points + " pontos",
						  imageUrl: "imgs/thumbs-up.jpg" 
						});
						var audio = new Audio('sounds/congratulations.mp3');
						audio.play();
						document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	   
				}
			};   

			document.getElementById("rotate-xx-up").onclick = function(){				
				// Updating	
				if(nivel == 2){
					angleXX3 -= 45;			
					if(angleXX3 == 360 || angleXX3 == -360){
						angleXX3 = 0;
					}
					var tentativa = verificarPosicaoAngleXX(angleXX3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
					}			
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	 

				}else if(nivel == 3){
					angleXX3 -= 45;			
					if(angleXX3 == 360 || angleXX3 == -360){
						angleXX3 = 0;
					}
					var tentativa = verificarPosicaoAngleXX(angleXX3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
							  title: "Terceiro nivel concluido!",
						  text: "Acabou o jogo com " + points + " pontos",
						  imageUrl: "imgs/thumbs-up.jpg" 
						});
						var audio = new Audio('sounds/congratulations.mp3');
						audio.play();
						document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					}			
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	 
				}		
			};

			document.getElementById("rotate-xx-down").onclick = function(){		
				// Updating	
				if(nivel == 2){
					angleXX3 += 45;				
					if(angleXX3 == 360 || angleXX3 == -360){
						angleXX3 = 0;
					}
					var tentativa = verificarPosicaoAngleXX(angleXX3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  
				}else if(nivel == 3){
					angleXX3 += 45;				
					if(angleXX3 == 360 || angleXX3 == -360){
						angleXX3 = 0;
					}
					var tentativa = verificarPosicaoAngleXX(angleXX3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Terceiro nivel concluido!",
						  text: "Acabou o jogo com " + points + " pontos",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/congratulations.mp3');
						audio.play();
						document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  
				}
			};

			document.getElementById("rotate-yy-right").onclick = function(){			
				// Updating			
				if(nivel == 2){
					angleYY3 += 45;		
					if(angleYY3 == 360 || angleYY3 == -360){
						angleYY3 = 0;
					}	
					var tentativa = verificarPosicaoAngleYY(angleYY3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  

				}else if(nivel == 3){
					angleYY3 += 45;		
					if(angleYY3 == 360 || angleYY3 == -360){
						angleYY3 = 0;
					}	
					var tentativa = verificarPosicaoAngleYY(angleYY3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
							  title: "Terceiro nivel concluido!",
						  text: "Acabou o jogo com " + points + " pontos",
						  imageUrl: "imgs/thumbs-up.jpg" 
						});
						var audio = new Audio('sounds/congratulations.mp3');
						audio.play();
						document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  
				}
			};

			document.getElementById("rotate-yy-left").onclick = function(){			
				// Updating	
				if(nivel == 2){
					angleYY3 -= 45;		
					if(angleYY3 == 360 || angleYY3 == -360){
						angleYY3 = 0;
					}
					var tentativa = verificarPosicaoAngleYY(angleYY3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  

				}else if(nivel == 3){
					angleYY3 -= 45;		
					if(angleYY3 == 360 || angleYY3 == -360){
						angleYY3 = 0;
					}
					var tentativa = verificarPosicaoAngleYY(angleYY3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
							  title: "Terceiro nivel concluido!",
						  text: "Acabou o jogo com " + points + " pontos",
						  imageUrl: "imgs/thumbs-up.jpg" 
						});
						var audio = new Audio('sounds/congratulations.mp3');
						audio.play();
						document.getElementById("nivel3").disabled = false;
						points_fim_nivel3 = points;
						document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					}	
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  
				}
			};

			document.getElementById("rotate-zz-cw").onclick = function(){		
				// Updating		
				if(nivel == 2){
					angleZZ3 -= 45;			
					if(angleZZ3 == 360 || angleZZ3 == -360){
						angleZZ3 = 0;
					}
					var tentativa = verificarPosicaoAngleZZ(angleZZ3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
					}
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	 
				}else if(nivel == 3){
					angleZZ3 -= 45;			
					if(angleZZ3 == 360 || angleZZ3 == -360){
						angleZZ3 = 0;
					}
					var tentativa = verificarPosicaoAngleZZ(angleZZ3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
							  title: "Terceiro nivel concluido!",
						  text: "Acabou o jogo com " + points + " pontos",
						  imageUrl: "imgs/thumbs-up.jpg" 
						});
						var audio = new Audio('sounds/congratulations.mp3');
						audio.play();
						document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					}
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	 
				}
			};



			document.getElementById("rotate-zz-ccw").onclick = function(){		
				// Updating
				if(nivel == 2) {
					angleZZ3 += 45;				
					if(angleZZ3 == 360 || angleZZ3 == -360){
						angleZZ3 = 0;
					}
					var tentativa = verificarPosicaoAngleZZ(angleZZ3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
						  title: "Segundo nivel concluido!",
						  text: "Próximo nivel",
						  imageUrl: "imgs/thumbs-up.jpg"
						});
						var audio = new Audio('sounds/correct.mp3');
						audio.play();
						background = 0;
						nivel = nivel+1;
						points_fim_nivel2 = points;
						niveis();
					}			
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  
				}else if(nivel == 3){
					angleZZ3 += 45;				
					if(angleZZ3 == 360 || angleZZ3 == -360){
						angleZZ3 = 0;
					}
					var tentativa = verificarPosicaoAngleZZ(angleZZ3,nivel,points,fase,jogadas_nivel,"figura3");
					points = tentativa[0];
					document.getElementById("points").innerHTML=points;
					fase = tentativa[1];
					jogadas_nivel = tentativa[2];
					document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
					if(acertou == 18){
						swal({
							  title: "Terceiro nivel concluido!",
						  text: "Acabou o jogo com " + points + " pontos",
						  imageUrl: "imgs/thumbs-up.jpg" 
						});
						var audio = new Audio('sounds/congratulations.mp3');
						audio.play();
						document.getElementById("nivel3").disabled = false;
					points_fim_nivel3 = points;
					document.getElementById("jogoTerminado").innerHTML="Terminou o jogo com " + points_fim_nivel3 + " pontos!"
					}			
					else{
						if(jogadas_nivel == 0 && points != 0){
							swal({
								  title: "Jogadas disponiveis esgotadas",
								  text: "Começar do inicio",
								  imageUrl: "imgs/sadSmile.png"
							});
							reset();
						}
						else if(points == 0){
							swal({
								  title: "Perdeu o Jogo",
								  text: "Começar do nivel 1",
								  imageUrl: "imgs/sadSmile.png"
							});
							var audio = new Audio('sounds/fail.mp3');
							audio.play();
							background = 0;
							nivel = 1;
							niveis();
						}
						drawScene(); 
					}	  
				}
			}; 

		};	
	}			


	document.getElementById("reset-button").onclick = function(){	
		reset();
		drawScene();  
	};            
}