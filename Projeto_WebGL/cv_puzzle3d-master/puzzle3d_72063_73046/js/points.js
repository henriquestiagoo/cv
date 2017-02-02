
/* Points related */

var acertou = 0;

/* Posições iniciais - Depois vão ser geradas novas posições */

	//figura1
var hit_x1 = false;
var hit_y1 = false;
var hit_z1 = false;
var hit_angY1 = false;
var hit_angY1_XZ = false;
var hit_angX1 = false;
var hit_angZ1 = false;
		//nivel 1
var tx1_certo_nivel1 = 0.0;
var ty1_certo_nivel1 = 0.25;
var tz1_certo_nivel1 = -0.1;
var angleXX1_certo_nivel1 = 0.0;
var angleYY1_certo_nivel1 = -90;
var angleZZ1_certo_nivel1 = 0.0;
		//nivel 2
var tx1_certo_nivel2 = 0.0;
var ty1_certo_nivel2 = 0.65;
var tz1_certo_nivel2 = -0.2;
var angleXX1_certo_nivel2 = 0.0;
var angleYY1_certo_nivel2 = 180;
var angleZZ1_certo_nivel2 = 45;
		//nivel 3	
var tx1_certo_nivel3 = 0.0;
var ty1_certo_nivel3 = 0.75;
var tz1_certo_nivel3 = -0.5;
var angleXX1_certo_nivel3 = 0.0;
var angleYY1_certo_nivel3 = -180;
var angleZZ1_certo_nivel3 = 0.0;		
	//figura2
var hit_x2 = false;
var hit_y2 = false;
var hit_z2 = false;
var hit_angY2 = false;
var hit_angX2 = false;
var hit_angZ2 = false;
		//nivel 1
var tx2_certo_nivel1 = 0.0;
var ty2_certo_nivel1 = 0.0;
var tz2_certo_nivel1 = -0.1;
var angleYY2_certo_nivel1 = 0.0;
var angleXX2_certo_nivel1 = 90;
var angleZZ2_certo_nivel1 = 0.0;
		//nivel 2
var tx2_certo_nivel2 = 0.0;
var ty2_certo_nivel2 = 0.30;
var tz2_certo_nivel2 = -0.2;
var angleYY2_certo_nivel2 = 90;
var angleXX2_certo_nivel2 = 0.0;
var angleZZ2_certo_nivel2 = 0.0;
		//nivel 3	
var tx2_certo_nivel3 = -0.5;
var ty2_certo_nivel3 = 0.35;
var tz2_certo_nivel3 = -0.5;
var angleYY2_certo_nivel3 = 180;
var angleXX2_certo_nivel3 = -90;
var angleZZ2_certo_nivel3 = 0.0;		
	//figura 3 
var hit_x3 = false;
var hit_y3 = false;
var hit_z3 = false;
var hit_angY3 = false;
var hit_angX3 = false;
var hit_angZ3 = false;
		// nivel 2	
var tx3_certo_nivel2 = 0.0;
var ty3_certo_nivel2 = -0.1;
var tz3_certo_nivel2 = -0.2;
var angleYY3_certo_nivel2 = 0.0;
var angleXX3_certo_nivel2 = 0.0;
var angleZZ3_certo_nivel2 = -90;
		// nivel3	
var tx3_certo_nivel3 = 0.6;
var ty3_certo_nivel3 = 0.95;
var tz3_certo_nivel3 = -0.5;
var angleYY3_certo_nivel3 = 0.0;
var angleXX3_certo_nivel3 = 90;
var angleZZ3_certo_nivel3 = 0.0;


function verificarPosicaoTx(tx, nivel, points, fase,jogadas, figura){
	if(nivel == 1){
		if(figura == "figura1"){
			if( !(tx >= tx1_certo_nivel1-0.04 && tx <= tx1_certo_nivel1+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 1, tx1_certo_nivel1, tx);
				if(hit_x1 == true){
					hit_x1 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x1 =true;
				setBarAttributesTranslationsOrAngles(1, 1);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou a variavel X da pirâmide", "success");
				}
			}
		}	
		if(figura == "figura2"){
			if( !(tx >= tx2_certo_nivel1-0.04 && tx <= tx2_certo_nivel1+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 2, tx2_certo_nivel1, tx);
				if(hit_x2 == true){
					hit_x2 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x2 =true;
				setBarAttributesTranslationsOrAngles(1, 2);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou a variavel X do cubo", "success");
				}
			}
		}
	}	
	else if(nivel == 2){
		if(figura == "figura1"){
			if( !(tx >= tx1_certo_nivel2-0.04 && tx <= tx1_certo_nivel2+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 3, tx1_certo_nivel2, tx);
				if(hit_x1 == true){
					hit_x1 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x1 =true;
				setBarAttributesTranslationsOrAngles(1, 3);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel X da estrela", "success");
				}
			}
		}	
		if(figura == "figura2"){
			if( !(tx >= tx2_certo_nivel2-0.04 && tx <= tx2_certo_nivel2+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 4, tx2_certo_nivel2, tx);
				if(hit_x2 == true){
					hit_x2 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x2 =true;
				setBarAttributesTranslationsOrAngles(1, 4);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel X da pirâmide", "success");
				}
			}
		}
		if(figura == "figura3"){
			if( !(tx >= tx3_certo_nivel2-0.04 && tx <= tx3_certo_nivel2+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 5, tx3_certo_nivel2, tx);
				if(hit_x3 == true){
					hit_x3 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x3 =true;
				setBarAttributesTranslationsOrAngles(1, 5);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel X do paralelipipedo", "success");
				}
			}
		}
	}else if(nivel==3){
		if(figura == "figura1"){
			if( !(tx >= tx1_certo_nivel3-0.04 && tx <= tx1_certo_nivel3+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 6, tx1_certo_nivel3, tx);
				if(hit_x1 == true){
					hit_x1 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x1 =true;
				setBarAttributesTranslationsOrAngles(1, 6);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel X da Pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( !(tx >= tx2_certo_nivel3-0.04 && tx <= tx2_certo_nivel3+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 7, tx2_certo_nivel3, tx);
				if(hit_x2 == true){
					hit_x2 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x2 =true;
				setBarAttributesTranslationsOrAngles(1, 7);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel X da Pirâmide", "success");
				}
			}
		}
		if(figura == "figura3"){
			if( !(tx >= tx3_certo_nivel3-0.04 && tx <= tx3_certo_nivel3+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(1, 8, tx3_certo_nivel3, tx);
				if(hit_x3 == true){
					hit_x3 = false;
					acertou -= 1;
				}
			}
			else{
				acertou += 1;
				hit_x3 =true;
				setBarAttributesTranslationsOrAngles(1, 8);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel X do paralelipipedo", "success");
				}
			}
		}	
	}
	return [points,fase,jogadas];
}

function verificarPosicaoTy(ty, nivel, points, fase,jogadas, figura){
	if(nivel == 1){
		if(figura == "figura1"){
			if( !(ty >= ty1_certo_nivel1-0.04 && ty <= ty1_certo_nivel1+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 1, ty1_certo_nivel1, ty);
				if(hit_y1 == true){
					hit_y1 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_y1 = true;
				setBarAttributesTranslationsOrAngles(2, 1);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou a variavel Y da pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){

			if( !(ty >= ty2_certo_nivel1-0.04 && ty <= ty2_certo_nivel1+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 2, ty2_certo_nivel1, ty);
				if(hit_y2 == true){
					hit_y2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_y2 = true;
				setBarAttributesTranslationsOrAngles(2, 2);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou a variavel Y do cubo", "success");
				}
			}
		}
	}
	else if(nivel == 2){
		if(figura == "figura1"){
			if( !(ty >= ty1_certo_nivel2-0.04 && ty <= ty1_certo_nivel2+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 3, ty1_certo_nivel2, ty);
				if(hit_y1 == true){
					hit_y1 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_y1 = true;
				setBarAttributesTranslationsOrAngles(2, 3);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Y da estrela", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( !(ty >= ty2_certo_nivel2-0.04 && ty <= ty2_certo_nivel2+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 4, ty2_certo_nivel2, ty);
				if(hit_y2 == true){
					hit_y2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_y2 = true;
				setBarAttributesTranslationsOrAngles(2, 4);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Y da pirâmide", "success");
				}
			}
		}
		if(figura == "figura3"){
			if( !(ty >= ty3_certo_nivel2-0.04 && ty <= ty3_certo_nivel2+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 5, ty3_certo_nivel2, ty);
				if(hit_y3 == true){
					hit_y3 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_y3 = true;
				setBarAttributesTranslationsOrAngles(2, 5);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Y do paralelipipedo", "success");
				}
			}
		}
	}else if(nivel == 3){
		if(figura == "figura1"){
			if( !(ty >= ty1_certo_nivel3-0.04 && ty <= ty1_certo_nivel3+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 6, ty1_certo_nivel3, ty);
				if(hit_y1 == true){
					hit_y1 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_y1 = true;
				setBarAttributesTranslationsOrAngles(2, 6);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Y da Pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( !(ty >= ty2_certo_nivel3-0.04 && ty <= ty2_certo_nivel3+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 7, ty2_certo_nivel3, ty);
				if(hit_y2 == true){
					hit_y2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_y2 = true;
				setBarAttributesTranslationsOrAngles(2, 7);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Y do Cubo", "success");
				}
			}
		}
		if(figura == "figura3"){
			if( !(ty >= ty3_certo_nivel3-0.04 && ty <= ty3_certo_nivel3+0.04)){
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(2, 8, ty3_certo_nivel3, ty);
				if(hit_y3 == true){
					hit_y3 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_y3 = true;
				setBarAttributesTranslationsOrAngles(2, 8);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Y do Paralelipipedo", "success");
				}
			}
		}
	}
	return [points,fase,jogadas];
}


function verificarPosicaoTz(tz, nivel, points, fase,jogadas, figura){
	if(nivel == 1){
		if(figura == "figura1"){
			if(!(tz >= tz1_certo_nivel1-0.04 && tz <= tz1_certo_nivel1+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 1, tz1_certo_nivel1, tz);
				if(hit_z1 == true){
					hit_z1 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z1 = true;
				setBarAttributesTranslationsOrAngles(3, 1);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou a variavel Z da pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if(!(tz >= tz2_certo_nivel1-0.04 && tz <= tz2_certo_nivel1+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 2, tz2_certo_nivel1, tz);
				if(hit_z2 == true){
					hit_z2 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z2 = true;
				setBarAttributesTranslationsOrAngles(3, 2);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou a variavel Z do cubo", "success");
				}
			}
		}
	}
	else if(nivel == 2){
		if(figura == "figura1"){
			if(!(tz >= tz1_certo_nivel2-0.04 && tz <= tz1_certo_nivel2+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 3, tz1_certo_nivel2, tz);
				if(hit_z1 == true){
					hit_z1 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z1 = true;
				setBarAttributesTranslationsOrAngles(3, 3);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Z da estrela", "success");
				}
			}
		}
		if(figura == "figura2"){
			if(!(tz >= tz2_certo_nivel2-0.04 && tz <= tz2_certo_nivel2+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 4, tz2_certo_nivel2, tz);
				if(hit_z2 == true){
					hit_z2 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z2 = true;
				setBarAttributesTranslationsOrAngles(3, 4);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Z da pirâmide", "success");
				}
			}
		}
		if(figura == "figura3"){
			if(!(tz >= tz3_certo_nivel2-0.04 && tz <= tz3_certo_nivel2+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 5, tz3_certo_nivel2, tz);
				if(hit_z3 == true){
					hit_z3 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z3 = true;
				setBarAttributesTranslationsOrAngles(3, 5);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Z do paralelipipedo", "success");
				}
			}
		}
	}else if(nivel == 3){
		if(figura == "figura1"){
			if(!(tz >= tz1_certo_nivel3-0.04 && tz <= tz1_certo_nivel3+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 6, tz1_certo_nivel3, tz);
				if(hit_z1 == true){
					hit_z1 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z1 = true;
				setBarAttributesTranslationsOrAngles(3, 6);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Z da Pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if(!(tz >= tz2_certo_nivel3-0.04 && tz <= tz2_certo_nivel3+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 7, tz2_certo_nivel3, tz);
				if(hit_z2 == true){
					hit_z2 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z2 = true;
				setBarAttributesTranslationsOrAngles(3, 7);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Z do Cubo", "success");
				}
			}
		}
		if(figura == "figura3"){
			if(!(tz >= tz3_certo_nivel3-0.04 && tz <= tz3_certo_nivel3+0.04)) {
				points -= 10;
				jogadas -= 1;
				setBarAttributesTranslationsNot(3, 8, tz3_certo_nivel3, tz);
				if(hit_z3 == true){
					hit_z3 = false;
					acertou -= 1; 
				}
			}else{
				acertou += 1;
				hit_z3 = true;
				setBarAttributesTranslationsOrAngles(3, 8);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou a variavel Z do Paralelipipedo", "success");
				}
			}
		}
	}
	return [points,fase,jogadas];
}

function verificarPosicaoAngleXX(angleXX, nivel, points, fase,jogadas, figura){
	if(nivel == 1){
		if(figura == "figura1"){ 
			if( angleXX != angleXX1_certo_nivel1 ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 1, angleXX1_certo_nivel1, angleXX);			
				if(hit_angX1 == true){
					hit_angX1 = false;
					acertou -= 1;
				}			
			}
			else{
				acertou += 1;
				hit_angX1 = true;	
				setBarAttributesTranslationsOrAngles(4, 1);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou o ângulo X da pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){ 
			if( angleXX != angleXX2_certo_nivel1 - 360 && angleXX != angleXX2_certo_nivel1){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 2, angleXX2_certo_nivel1, angleXX);	
				if(hit_angX2 == true){
					hit_angX2 = false;
					acertou -= 1;
				}		
			}else{
				acertou += 1;
				hit_angX2 = true;
				setBarAttributesTranslationsOrAngles(4, 2);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou o ângulo X do cubo", "success");
				}
			}				
		}
	}
	else if(nivel == 2){
		if(figura == "figura1"){ 
			if( angleXX != angleXX1_certo_nivel2 && angleXX != 360 - (Math.abs(angleXX1_certo_nivel2))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 3, angleXX1_certo_nivel2, angleXX);			
				if(hit_angX1 == true){
					hit_angX1 = false;
					acertou -= 1;
				}			
			}
			else{
				acertou += 1;
				hit_angX1 = true;	
				setBarAttributesTranslationsOrAngles(4, 3);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo X da estrela", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleXX != angleXX2_certo_nivel2 + 360 && angleXX != angleXX2_certo_nivel2 ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 4, angleXX2_certo_nivel2, angleXX);	
				if(hit_angX2 == true){
					hit_angX2 = false;
					acertou -= 1;
				}		
			}else{
				acertou += 1;
				hit_angX2 = true;
				setBarAttributesTranslationsOrAngles(4, 4);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo X da pirâmide", "success");
				}
			}				
		}
		if(figura == "figura3"){
			if( angleXX != angleXX3_certo_nivel2 - 360 && angleXX != angleXX3_certo_nivel2){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 5, angleXX3_certo_nivel2, angleXX);	
				if(hit_angX3 == true){
					hit_angX3 = false;
					acertou -= 1;
				}		
			}else{
				acertou += 1;
				hit_angX3 = true;
				setBarAttributesTranslationsOrAngles(4, 5);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo X do paralelipipedo", "success");
				}
			}				
		}
	}else if(nivel == 3){
		if(figura == "figura1"){ 
			if( angleXX != angleXX1_certo_nivel3 && angleXX != 360 - (Math.abs(angleXX1_certo_nivel3))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 6, angleXX1_certo_nivel3, angleXX);			
				if(hit_angX1 == true){
					hit_angX1 = false;
					acertou -= 1;
				}			
			}
			else{
				acertou += 1;
				hit_angX1 = true;	
				setBarAttributesTranslationsOrAngles(4, 6);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo X da Pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleXX != angleXX2_certo_nivel3 + 360 && angleXX != angleXX2_certo_nivel3 && angleXX != 360 - (Math.abs(angleXX2_certo_nivel3)) ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 7, angleXX2_certo_nivel3, angleXX);	
				if(hit_angX2 == true){
					hit_angX2 = false;
					acertou -= 1;
				}		
			}else{
				acertou += 1;
				hit_angX2 = true;
				setBarAttributesTranslationsOrAngles(4, 7);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo X do Cubo", "success");
				}
			}				
		}
		if(figura == "figura3"){
			if( angleXX != angleXX3_certo_nivel3 - 360 && angleXX != angleXX3_certo_nivel3 && angleXX != 360 - (Math.abs(angleXX3_certo_nivel3))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(4, 8, angleXX3_certo_nivel3, angleXX);	
				if(hit_angX3 == true){
					hit_angX3 = false;
					acertou -= 1;
				}		
			}else{
				acertou += 1;
				hit_angX3 = true;
				setBarAttributesTranslationsOrAngles(4, 8);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo X do Paralelipipedo", "success");
				}
			}				
		}
	}
	return [points,fase,jogadas];
}

function verificarPosicaoAngleYY(angleYY, nivel, points, fase,jogadas, figura){		
	if(nivel == 1){
		if(figura == "figura1"){					
			if( angleYY != angleYY1_certo_nivel1 && angleYY != angleYY1_certo_nivel1 + 360 && angleYY != 360 - (Math.abs(angleYY1_certo_nivel1))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 1, angleYY1_certo_nivel1, angleYY);	
				if(hit_angY1 == true){
					hit_angY1 = false;
					acertou -= 1;
				}	
			}else{
				acertou += 1;
				hit_angY1 = true;
				setBarAttributesTranslationsOrAngles(5, 1);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou o ângulo Y da pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleYY != angleYY2_certo_nivel1 && angleYY != angleYY2_certo_nivel1 + 360 && angleYY != 360 - (Math.abs(angleYY2_certo_nivel1))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 2, angleYY2_certo_nivel1, angleYY);	
				if(hit_angY2 == true){
					hit_angY2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angY2 = true;
				setBarAttributesTranslationsOrAngles(5, 2);	
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou o ângulo Y do cubo", "success");
				}
			}
		}
	}
	else if(nivel == 2){ 
		if(figura == "figura1"){
			if( angleYY != angleYY1_certo_nivel2 && angleYY != angleYY1_certo_nivel2 - 360 && angleYY != 360 - (Math.abs(angleYY1_certo_nivel2)) ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 3, angleYY1_certo_nivel2, angleYY);	
				if(hit_angY1 == true){
					hit_angY1 = false;
					acertou -= 1;
				}	
			}else{
				acertou += 1;
				hit_angY1 = true;
				setBarAttributesTranslationsOrAngles(5, 3);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Y da estrela", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleYY != angleYY2_certo_nivel2 && angleYY != angleYY2_certo_nivel2 - 360 ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 4, angleYY2_certo_nivel2, angleYY);	
				if(hit_angY2 == true){
					hit_angY2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angY2 = true;
				setBarAttributesTranslationsOrAngles(5, 4);	
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Y da pirâmide", "success");
				}
			}
		}
		if(figura == "figura3"){
			if( angleYY != angleYY3_certo_nivel2 && angleYY != 360 - (Math.abs(angleYY3_certo_nivel2))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 5, angleYY3_certo_nivel2, angleYY);	
				if(hit_angY3 == true){
					hit_angY3 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angY3 = true;
				setBarAttributesTranslationsOrAngles(5, 5);	
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Y do paralelipipedo", "success");
				}
			}
		}
	}else if(nivel == 3){
		if(figura == "figura1"){				
			if( angleYY != angleYY1_certo_nivel3 && angleYY != angleYY1_certo_nivel3 - 360 && angleYY != 360 - (Math.abs(angleYY1_certo_nivel3)) ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 6, angleYY1_certo_nivel3, angleYY);	
				if(hit_angY1 == true){
					hit_angY1 = false;
					acertou -= 1;
				}	
			}else{
				acertou += 1;
				hit_angY1 = true;
				setBarAttributesTranslationsOrAngles(5, 6);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Y da Pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleYY != angleYY2_certo_nivel3 && angleYY != angleYY2_certo_nivel3 - 360 && angleYY != 360 - (Math.abs(angleYY2_certo_nivel3))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 7, angleYY2_certo_nivel3, angleYY);	
				if(hit_angY2 == true){
					hit_angY2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angY2 = true;
				setBarAttributesTranslationsOrAngles(5, 7);	
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Y do Cubo", "success");
				}
			}
		}
		if(figura == "figura3"){
			if( angleYY != angleYY3_certo_nivel3 && angleYY != 360 - (Math.abs(angleYY3_certo_nivel3))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(5, 8, angleYY3_certo_nivel3, angleYY);	
				if(hit_angY3 == true){
					hit_angY3 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angY3 = true;
				setBarAttributesTranslationsOrAngles(5, 8);	
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Y do Paralelipipedo", "success");
				}
			}
		}
	}
	return [points,fase,jogadas];
}

function verificarPosicaoAngleZZ(angleZZ, nivel, points, fase,jogadas, figura){
	if(nivel == 1){
		if(figura == "figura1"){
			if( angleZZ != angleZZ1_certo_nivel1 && angleZZ != 360 - (Math.abs(angleZZ1_certo_nivel1))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 1, angleZZ1_certo_nivel1, angleZZ);
				if(hit_angZ1 == true){
					hit_angZ1 = false;
					acertou -= 1;
				}	
			}else{
				acertou += 1;
				hit_angZ1 = true;
				setBarAttributesTranslationsOrAngles(6, 1);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou o ângulo Z da pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleZZ != angleZZ2_certo_nivel1 && angleZZ != 360 - (Math.abs(angleZZ2_certo_nivel1))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 2, angleZZ2_certo_nivel1, angleZZ);	
				if(hit_angZ2 == true){
					hit_angZ2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angZ2 = true;
				setBarAttributesTranslationsOrAngles(6, 2);
				if(acertou != 12){
					swal("Bom trabalho!", "Acertou o ângulo Z da cubo", "success");
				}
			}
		}
	}
	else if(nivel == 2){
		if(figura == "figura1"){
			if( angleZZ != angleZZ1_certo_nivel2 && angleZZ != angleZZ1_certo_nivel2 - 360 && angleZZ != 360 - (Math.abs(angleZZ1_certo_nivel2))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 3, angleZZ1_certo_nivel2, angleZZ);
				if(hit_angZ1 == true){
					hit_angZ1 = false;
					acertou -= 1;
				}	
			}else{
				acertou += 1;
				hit_angZ1 = true;
				setBarAttributesTranslationsOrAngles(6, 3);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Z da estrela", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleZZ != angleZZ2_certo_nivel2 && angleZZ != 360 - (Math.abs(angleZZ2_certo_nivel2))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 4, angleZZ2_certo_nivel2, angleZZ);	
				if(hit_angZ2 == true){
					hit_angZ2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angZ2 = true;
				setBarAttributesTranslationsOrAngles(6, 4);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Z da pirâmide", "success");
				}
			}
		}
		if(figura == "figura3"){
			if( angleZZ != angleZZ3_certo_nivel2 && angleZZ != angleZZ3_certo_nivel2 + 360 && angleZZ != 360 - (Math.abs(angleZZ3_certo_nivel2))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 5, angleZZ3_certo_nivel2, angleZZ);	
				if(hit_angZ3 == true){
					hit_angZ3 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angZ3 = true;
				setBarAttributesTranslationsOrAngles(6, 5);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Z do paralelipipedo", "success");
				}
			}
		}
	}else if(nivel == 3){	
		if(figura == "figura1"){
			if( angleZZ != angleZZ1_certo_nivel3 && angleZZ != angleZZ1_certo_nivel3 - 360 && angleZZ != 360 - (Math.abs(angleZZ1_certo_nivel3))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 6, angleZZ1_certo_nivel3, angleZZ);
				if(hit_angZ1 == true){
					hit_angZ1 = false;
					acertou -= 1;
				}	
			}else{
				acertou += 1;
				hit_angZ1 = true;
				setBarAttributesTranslationsOrAngles(6, 6);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Z da Pirâmide", "success");
				}
			}
		}
		if(figura == "figura2"){
			if( angleZZ != angleZZ2_certo_nivel3 && angleZZ != 360 - (Math.abs(angleZZ2_certo_nivel3)) ){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 7, angleZZ2_certo_nivel3, angleZZ);	
				if(hit_angZ2 == true){
					hit_angZ2 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angZ2 = true;
				setBarAttributesTranslationsOrAngles(6, 7);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Z do Cubo", "success");
				}
			}
		}
		if(figura == "figura3"){
			if( angleZZ != angleZZ3_certo_nivel3 && angleZZ != angleZZ3_certo_nivel3 + 360 && angleZZ != 360 - (Math.abs(angleZZ3_certo_nivel3))){
				points -= 10;
				jogadas -= 1;
				setBarAttributesAnglesNot(6, 8, angleZZ3_certo_nivel3, angleZZ);	
				if(hit_angZ3 == true){
					hit_angZ3 = false;
					acertou -= 1;
				}
			}else{
				acertou += 1;
				hit_angZ3 = true;
				setBarAttributesTranslationsOrAngles(6, 8);
				if(acertou != 18){
					swal("Bom trabalho!", "Acertou o ângulo Z do Paralelipipedo", "success");
				}
			}
		}
	}
	return [points,fase,jogadas];
}

function acertou_inicial_nivel1(tx1,ty1,tz1,angleXX1,angleYY1,angleZZ1,tx2,ty2,tz2,angleXX2,angleYY2,angleZZ2){
	if(nivel == 1){
		
		if(tx1 == tx1_certo_nivel1){
			hit_x1 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(1, 1);
		}
		if(ty1 == ty1_certo_nivel1){
			hit_y1 = true;
			acertou +=1
			setBarAttributesTranslationsOrAngles(2, 1);
		}
		if(tz1 == tz1_certo_nivel1){
			hit_z1 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(3, 1);
		}
		if(angleXX1 == angleXX1_certo_nivel1){
			hit_angX1 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(4, 1);
		}
		if(angleYY1 == angleYY1_certo_nivel1){
			hit_angY1 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(5, 1);
		}
		if(angleZZ1 == angleZZ1_certo_nivel1){
			hit_angZ1 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(6, 1);
		}
		//figura2
		if(tx2 == tx2_certo_nivel1){
			hit_x2 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(1, 2);
		}
		if(ty2 == ty2_certo_nivel1){
			hit_y2 = true;
			acertou +=1
			setBarAttributesTranslationsOrAngles(2, 2);
		}
		if(tz2 == tz2_certo_nivel1){
			hit_z2 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(3, 2);
		}
		if(angleXX2 == angleXX2_certo_nivel1){
			hit_angX2 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(4, 2);
		}
		if(angleYY2 == angleYY2_certo_nivel1){
			hit_angY2 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(5, 2);
		}
		if(angleZZ2 == angleZZ2_certo_nivel1){
			hit_angZ2 = true;
			acertou += 1;
			setBarAttributesTranslationsOrAngles(6, 2);
		}
	}
}

function acertou_inicial_nivel2(tx1,ty1,tz1,angleXX1,angleYY1,angleZZ1,tx2,ty2,tz2,angleXX2,angleYY2,angleZZ2,tx3,ty3,tz3,angleXX3,angleYY3,angleZZ3){	
	//figura1_nivel2 -> fig3
	if(tx1 == tx1_certo_nivel2){
		hit_x1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(1, 3);
	}
	if(ty1 == ty1_certo_nivel2){
		hit_y1 = true;
		acertou +=1
		setBarAttributesTranslationsOrAngles(2, 3);
	}
	if(tz1 == tz1_certo_nivel2){
		hit_z1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(3, 3);
	}
	if(angleXX1 == angleXX1_certo_nivel2){
		hit_angX1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(4, 3);
	}
	if(angleYY1 == angleYY1_certo_nivel2){
		hit_angY1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(5, 3);
	}
	if(angleZZ1 == angleZZ1_certo_nivel2){
		hit_angZ1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(6, 3);
	}
	//figura2_nivel2 -> fig4
	if(tx2 == tx2_certo_nivel2){
		hit_x2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(1, 4);
	}
	if(ty2 == ty2_certo_nivel2){
		hit_y2 = true;
		acertou +=1
		setBarAttributesTranslationsOrAngles(2, 4);
	}
	if(tz2 == tz2_certo_nivel2){
		hit_z2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(3, 4);
	}
	if(angleXX2 == angleXX2_certo_nivel2){
		hit_angX2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(4, 4);
	}
	if(angleYY2 == angleYY2_certo_nivel2){
		hit_angY2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(5, 4);
	}
	if(angleZZ2 == angleZZ2_certo_nivel2){
		hit_angZ2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(6, 4);
	}
	//figura3_nivel2 -> fig5
	if(tx3 == tx3_certo_nivel2){
		hit_x3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(1, 5);
	}
	if(ty3 == ty3_certo_nivel2){
		hit_y3 = true;
		acertou +=1
		setBarAttributesTranslationsOrAngles(2, 5);
	}
	if(tz3 == tz3_certo_nivel2){
		hit_z3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(3, 5);
	}
	if(angleXX3 == angleXX3_certo_nivel2){
		hit_angX3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(4, 5);
	}
	if(angleYY3 == angleYY3_certo_nivel2){
		hit_angY3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(5, 5);
	}
	if(angleZZ3 == angleZZ3_certo_nivel2){
		hit_angZ3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(6, 5);
	}
}

function acertou_inicial_nivel3(tx1,ty1,tz1,angleXX1,angleYY1,angleZZ1,tx2,ty2,tz2,angleXX2,angleYY2,angleZZ2,tx3,ty3,tz3,angleXX3,angleYY3,angleZZ3){	
	//figura1_nivel3 -> fig6
	if(tx1 == tx1_certo_nivel3){
		hit_x1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(1, 6);
	}
	if(ty1 == ty1_certo_nivel3){
		hit_y1 = true;
		acertou +=1
		setBarAttributesTranslationsOrAngles(2, 6);
	}
	if(tz1 == tz1_certo_nivel3){
		hit_z1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(3, 6);
	}
	if(angleXX1 == angleXX1_certo_nivel3){
		hit_angX1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(4, 6);
	}
	if(angleYY1 == angleYY1_certo_nivel3){
		hit_angY1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(5, 6);
	}
	if(angleZZ1 == angleZZ1_certo_nivel3){
		hit_angZ1 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(6, 6);
	}
	//figura2_nivel3 -> fig7
	if(tx2 == tx2_certo_nivel3){
		hit_x2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(1, 7);
	}
	if(ty2 == ty2_certo_nivel3){
		hit_y2 = true;
		acertou +=1
		setBarAttributesTranslationsOrAngles(2, 7);
	}
	if(tz2 == tz2_certo_nivel3){
		hit_z2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(3, 7);
	}
	if(angleXX2 == angleXX2_certo_nivel3){
		hit_angX2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(4, 7);
	}
	if(angleYY2 == angleYY2_certo_nivel3){
		hit_angY2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(5, 7);
	}
	if(angleZZ2 == angleZZ2_certo_nivel3){
		hit_angZ2 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(6, 7);
	}
	//figura3_nivel23 -> fig8
	if(tx3 == tx3_certo_nivel3){
		hit_x3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(1, 8);
	}
	if(ty3 == ty3_certo_nivel3){
		hit_y3 = true;
		acertou +=1
		setBarAttributesTranslationsOrAngles(2, 8);
	}
	if(tz3 == tz3_certo_nivel3){
		hit_z3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(3, 8);
	}
	if(angleXX3 == angleXX3_certo_nivel3){
		hit_angX3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(4, 8);
	}
	if(angleYY3 == angleYY3_certo_nivel3){
		hit_angY3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(5, 8);
	}
	if(angleZZ3 == angleZZ3_certo_nivel3){
		hit_angZ3 = true;
		acertou += 1;
		setBarAttributesTranslationsOrAngles(6, 8);
	}
}