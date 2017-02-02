
/* Progress Bars related */

var bars_fig1_nivel1 = 1;
var bars_fig2_nivel1 = 0;
var bars_fig1_nivel2 = 0;
var bars_fig2_nivel2 = 0;
var bars_fig3_nivel2 = 0;
var bars_fig1_nivel3 = 0;
var bars_fig2_nivel3 = 0;
var bars_fig3_nivel3 = 0;

function setProgressBars(){
  var classes = ["success","info","warning"];
  var id_bars_fig1 = ["bar1_fig1" /*tx_fig1*/, "bar2_fig1" /*ty_fig1*/, "bar3_fig1" /*tz_fig1*/];  
  var id_bars2_fig1 = ["bar4_fig1" /*angX_fig1*/, "bar5_fig1" /*angY_fig1*/, "bar6_fig1" /*angZ_fig1*/]; 

  var id_bars_fig2 = ["bar1_fig2" /*tx_fig2*/, "bar2_fig2" /*ty_fig2*/, "bar3_fig2" /*tz_fig2*/];
  var id_bars2_fig2 = ["bar4_fig2" /*angX_fig2*/, "bar5_fig2" /*angY_fig2*/, "bar6_fig2" /*angZ_fig2*/];

  var id_bars_fig3 = ["bar1_fig3" /*tx_fig3*/, "bar2_fig3" /*ty_fig3*/, "bar3_fig3" /*tz_fig3*/];  
  var id_bars2_fig3 = ["bar4_fig3" /*angX_fig3*/, "bar5_fig3" /*angY_fig3*/, "bar6_fig3" /*angZ_fig3*/]; 

  var id_bars_fig4 = ["bar1_fig4" /*tx_fig4*/, "bar2_fig4" /*ty_fig4*/, "bar3_fig4" /*tz_fig4*/];  
  var id_bars2_fig4 = ["bar4_fig4" /*angX_fig4*/, "bar5_fig4" /*angY_fig4*/, "bar6_fig4" /*angZ_fig4*/]; 

  var id_bars_fig5 = ["bar1_fig5" /*tx_fig5*/, "bar2_fig5" /*ty_fig5*/, "bar3_fig5" /*tz_fig5*/];  
  var id_bars2_fig5 = ["bar4_fig5" /*angX_fig5*/, "bar5_fig5" /*angY_fig5*/, "bar6_fig5" /*angZ_fig5*/]; 

  var id_bars_fig6 = ["bar1_fig6" /*tx_fig6*/, "bar2_fig6" /*ty_fig6*/, "bar3_fig6" /*tz_fig6*/];  
  var id_bars2_fig6 = ["bar4_fig6" /*angX_fig6*/, "bar5_fig6" /*angY_fig6*/, "bar6_fig6" /*angZ_fig6*/]; 

  var id_bars_fig7 = ["bar1_fig7" /*tx_fig7*/, "bar2_fig7" /*ty_fig7*/, "bar3_fig7" /*tz_fig7*/];  
  var id_bars2_fig7 = ["bar4_fig7" /*angX_fig7*/, "bar5_fig7" /*angY_fig7*/, "bar6_fig7" /*angZ_fig7*/]; 

  var id_bars_fig8 = ["bar1_fig8" /*tx_fig8*/, "bar2_fig8" /*ty_fig8*/, "bar3_fig8" /*tz_fig8*/];  
  var id_bars2_fig8 = ["bar4_fig8" /*angX_fig8*/, "bar5_fig8" /*angY_fig8*/, "bar6_fig8" /*angZ_fig8*/]; 

  var titles_bars = ["X", "Y", "Z"];

  for(var i=0; i<3; i++){
    
    $("#bars_fig1").append('<div class="progress"><div id="'+ id_bars_fig1[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Translação em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

    $("#bars2_fig1").append('<div class="progress"><div id="'+ id_bars2_fig1[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Ângulo em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

    $("#bars_fig2").append('<div class="progress"><div id="'+ id_bars_fig2[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
        title="Translaçao em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');    

    $("#bars2_fig2").append('<div class="progress"><div id="'+ id_bars2_fig2[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
        title="Ângulo em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');
    
    $("#bars_fig3").append('<div class="progress"><div id="'+ id_bars_fig3[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Translação em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

    $("#bars2_fig3").append('<div class="progress"><div id="'+ id_bars2_fig3[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Ângulo em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');
    
    $("#bars_fig4").append('<div class="progress"><div id="'+ id_bars_fig4[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Translação em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

    $("#bars2_fig4").append('<div class="progress"><div id="'+ id_bars2_fig4[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Ângulo em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

    $("#bars_fig5").append('<div class="progress"><div id="'+ id_bars_fig5[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Translação em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

    $("#bars2_fig5").append('<div class="progress"><div id="'+ id_bars2_fig5[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Ângulo em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

    $("#bars_fig6").append('<div class="progress"><div id="'+ id_bars_fig6[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Translação em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

    $("#bars2_fig6").append('<div class="progress"><div id="'+ id_bars2_fig6[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Ângulo em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

    $("#bars_fig7").append('<div class="progress"><div id="'+ id_bars_fig7[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Translação em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

    $("#bars2_fig7").append('<div class="progress"><div id="'+ id_bars2_fig7[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Ângulo em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

    $("#bars_fig8").append('<div class="progress"><div id="'+ id_bars_fig8[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Translação em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

    $("#bars2_fig8").append('<div class="progress"><div id="'+ id_bars2_fig8[i] + '" class="progress-bar progress-bar-'+classes[1]+' progress-bar-striped" \
      title="Ângulo em '+ titles_bars[i] +'" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div></div>');

  }

  // Visible and hidden bars

  getVisibleBars();

  // Update Bars

  positionsNot();
   
}

function getBarsReset(fig1,fig2,fig3,fig4,fig5,fig6,fig7,fig8){
  bars_fig1_nivel1 = fig1;
  bars_fig2_nivel1 = fig2;
  bars_fig1_nivel2 = fig3;
  bars_fig2_nivel2 = fig4;
  bars_fig3_nivel2 = fig5;
  bars_fig1_nivel3 = fig6;
  bars_fig2_nivel3 = fig7;
  bars_fig3_nivel3 = fig8;
}

function positionsNot() {
  // Figura1
  setBarAttributesTranslationsNot(1, 1, tx1_certo_nivel1, tx1);
  setBarAttributesTranslationsNot(2, 1, ty1_certo_nivel1, ty1);
  setBarAttributesTranslationsNot(3, 1, tz1_certo_nivel1, tz1);
  setBarAttributesAnglesNot(4, 1, angleXX1_certo_nivel1, angleXX1);
  setBarAttributesAnglesNot(5, 1, angleYY1_certo_nivel1, angleYY1);
  setBarAttributesAnglesNot(6, 1, angleZZ1_certo_nivel1, angleZZ1);
  // Figura2
  setBarAttributesTranslationsNot(1, 2, tx2_certo_nivel1, tx2);
  setBarAttributesTranslationsNot(2, 2, ty2_certo_nivel1, ty2);
  setBarAttributesTranslationsNot(3, 2, tz2_certo_nivel1, tz2);
  setBarAttributesAnglesNot(4, 2, angleXX2_certo_nivel1, angleXX2);
  setBarAttributesAnglesNot(5, 2, angleYY2_certo_nivel1, angleYY2);
  setBarAttributesAnglesNot(6, 2, angleZZ2_certo_nivel1, angleZZ2);  
  // Figura3
  setBarAttributesTranslationsNot(1, 3, tx1_certo_nivel2, tx1);
  setBarAttributesTranslationsNot(2, 3, ty1_certo_nivel2, ty1);
  setBarAttributesTranslationsNot(3, 3, tz1_certo_nivel2, tz1);
  setBarAttributesAnglesNot(4, 3, angleXX1_certo_nivel2, angleXX1);
  setBarAttributesAnglesNot(5, 3, angleYY1_certo_nivel2, angleYY1);
  setBarAttributesAnglesNot(6, 3, angleZZ1_certo_nivel2, angleZZ1);  
  // Figura4
  setBarAttributesTranslationsNot(1, 4, tx2_certo_nivel2, tx2);
  setBarAttributesTranslationsNot(2, 4, ty2_certo_nivel2, ty2);
  setBarAttributesTranslationsNot(3, 4, tz2_certo_nivel2, tz2);
  setBarAttributesAnglesNot(4, 4, angleXX2_certo_nivel2, angleXX2);
  setBarAttributesAnglesNot(5, 4, angleYY2_certo_nivel2, angleYY2);
  setBarAttributesAnglesNot(6, 4, angleZZ2_certo_nivel2, angleZZ2);  
  // Figura5 
  setBarAttributesTranslationsNot(1, 5, tx3_certo_nivel2, tx3);
  setBarAttributesTranslationsNot(2, 5, ty3_certo_nivel2, ty3);
  setBarAttributesTranslationsNot(3, 5, tz3_certo_nivel2, tz3);
  setBarAttributesAnglesNot(4, 5, angleXX3_certo_nivel2, angleXX3);
  setBarAttributesAnglesNot(5, 5, angleYY3_certo_nivel2, angleYY3);
  setBarAttributesAnglesNot(6, 5, angleZZ3_certo_nivel2, angleZZ3);  
  // Figura6
  setBarAttributesTranslationsNot(1, 6, tx1_certo_nivel3, tx1);
  setBarAttributesTranslationsNot(2, 6, ty1_certo_nivel3, ty1);
  setBarAttributesTranslationsNot(3, 6, tz1_certo_nivel3, tz1);
  setBarAttributesAnglesNot(4, 6, angleXX1_certo_nivel3, angleXX1);
  setBarAttributesAnglesNot(5, 6, angleYY1_certo_nivel3, angleYY1);
  setBarAttributesAnglesNot(6, 6, angleZZ1_certo_nivel3, angleZZ1);  
  // Figura7
  setBarAttributesTranslationsNot(1, 7, tx2_certo_nivel3, tx2);
  setBarAttributesTranslationsNot(2, 7, ty2_certo_nivel3, ty2);
  setBarAttributesTranslationsNot(3, 7, tz2_certo_nivel3, tz2);
  setBarAttributesAnglesNot(4, 7, angleXX2_certo_nivel3, angleXX2);
  setBarAttributesAnglesNot(5, 7, angleYY2_certo_nivel3, angleYY2);
  setBarAttributesAnglesNot(6, 7, angleZZ2_certo_nivel3, angleZZ2);  
  // Figura8
  setBarAttributesTranslationsNot(1, 8, tx3_certo_nivel3, tx3);
  setBarAttributesTranslationsNot(2, 8, ty3_certo_nivel3, ty3);
  setBarAttributesTranslationsNot(3, 8, tz3_certo_nivel3, tz3);
  setBarAttributesAnglesNot(4, 8, angleXX3_certo_nivel3, angleXX3);
  setBarAttributesAnglesNot(5, 8, angleYY3_certo_nivel3, angleYY3);
  setBarAttributesAnglesNot(6, 8, angleZZ3_certo_nivel3, angleZZ3);  
}


function getVisibleBars(){
  if(bars_fig1_nivel1){
    //Visible
    document.getElementById("bars_fig1").style.display = "block";
    document.getElementById("bars2_fig1").style.display = "block";
    //hidden
    document.getElementById("bars_fig2").style.display = "none";
    document.getElementById("bars2_fig2").style.display = "none";
    document.getElementById("bars_fig3").style.display = "none";
    document.getElementById("bars2_fig3").style.display = "none";
    document.getElementById("bars_fig4").style.display = "none";
    document.getElementById("bars2_fig4").style.display = "none";
    document.getElementById("bars_fig5").style.display = "none";
    document.getElementById("bars2_fig5").style.display = "none";
    document.getElementById("bars_fig6").style.display = "none";
    document.getElementById("bars2_fig6").style.display = "none";
    document.getElementById("bars_fig7").style.display = "none";
    document.getElementById("bars2_fig7").style.display = "none";
    document.getElementById("bars_fig8").style.display = "none";
    document.getElementById("bars2_fig8").style.display = "none";
  }else if(bars_fig2_nivel1){
    document.getElementById("bars_fig2").style.display = "block";
    document.getElementById("bars2_fig2").style.display = "block";
    //
    document.getElementById("bars_fig1").style.display = "none";
    document.getElementById("bars2_fig1").style.display = "none";
    document.getElementById("bars_fig3").style.display = "none";
    document.getElementById("bars2_fig3").style.display = "none";
    document.getElementById("bars_fig4").style.display = "none";
    document.getElementById("bars2_fig4").style.display = "none";
    document.getElementById("bars_fig5").style.display = "none";
    document.getElementById("bars2_fig5").style.display = "none";
    document.getElementById("bars_fig6").style.display = "none";
    document.getElementById("bars2_fig6").style.display = "none";
    document.getElementById("bars_fig7").style.display = "none";
    document.getElementById("bars2_fig7").style.display = "none";
    document.getElementById("bars_fig8").style.display = "none";
    document.getElementById("bars2_fig8").style.display = "none";
  }else if(bars_fig1_nivel2){
    document.getElementById("bars_fig3").style.display = "block";
    document.getElementById("bars2_fig3").style.display = "block";
    //
    document.getElementById("bars_fig1").style.display = "none";
    document.getElementById("bars2_fig1").style.display = "none";
    document.getElementById("bars_fig2").style.display = "none";
    document.getElementById("bars2_fig2").style.display = "none";
    document.getElementById("bars_fig4").style.display = "none";
    document.getElementById("bars2_fig4").style.display = "none";
    document.getElementById("bars_fig5").style.display = "none";
    document.getElementById("bars2_fig5").style.display = "none";
     document.getElementById("bars_fig6").style.display = "none";
    document.getElementById("bars2_fig6").style.display = "none";
    document.getElementById("bars_fig7").style.display = "none";
    document.getElementById("bars2_fig7").style.display = "none";
    document.getElementById("bars_fig8").style.display = "none";
    document.getElementById("bars2_fig8").style.display = "none";
  }else if(bars_fig2_nivel2){
    document.getElementById("bars_fig4").style.display = "block";
    document.getElementById("bars2_fig4").style.display = "block";
    //
    document.getElementById("bars_fig1").style.display = "none";
    document.getElementById("bars2_fig1").style.display = "none";
    document.getElementById("bars_fig2").style.display = "none";
    document.getElementById("bars2_fig2").style.display = "none";
    document.getElementById("bars_fig3").style.display = "none";
    document.getElementById("bars2_fig3").style.display = "none";
    document.getElementById("bars_fig5").style.display = "none";
    document.getElementById("bars2_fig5").style.display = "none";
    document.getElementById("bars_fig6").style.display = "none";
    document.getElementById("bars2_fig6").style.display = "none";
    document.getElementById("bars_fig7").style.display = "none";
    document.getElementById("bars2_fig7").style.display = "none";
    document.getElementById("bars_fig8").style.display = "none";
    document.getElementById("bars2_fig8").style.display = "none";
  }else if(bars_fig3_nivel2){
    document.getElementById("bars_fig5").style.display = "block";
    document.getElementById("bars2_fig5").style.display = "block";
    //
    document.getElementById("bars_fig1").style.display = "none";
    document.getElementById("bars2_fig1").style.display = "none";
    document.getElementById("bars_fig2").style.display = "none";
    document.getElementById("bars2_fig2").style.display = "none";
    document.getElementById("bars_fig3").style.display = "none";
    document.getElementById("bars2_fig3").style.display = "none";
    document.getElementById("bars_fig4").style.display = "none";
    document.getElementById("bars2_fig4").style.display = "none";  
    document.getElementById("bars_fig6").style.display = "none";
    document.getElementById("bars2_fig6").style.display = "none";
    document.getElementById("bars_fig7").style.display = "none";
    document.getElementById("bars2_fig7").style.display = "none";
    document.getElementById("bars_fig8").style.display = "none";
    document.getElementById("bars2_fig8").style.display = "none";
  }else if(bars_fig1_nivel3){
    document.getElementById("bars_fig6").style.display = "block";
    document.getElementById("bars2_fig6").style.display = "block";
    //
    document.getElementById("bars_fig1").style.display = "none";
    document.getElementById("bars2_fig1").style.display = "none";
    document.getElementById("bars_fig2").style.display = "none";
    document.getElementById("bars2_fig2").style.display = "none";
    document.getElementById("bars_fig3").style.display = "none";
    document.getElementById("bars2_fig3").style.display = "none";
    document.getElementById("bars_fig4").style.display = "none";
    document.getElementById("bars2_fig4").style.display = "none"; 
    document.getElementById("bars_fig5").style.display = "none";
    document.getElementById("bars2_fig5").style.display = "none";
    document.getElementById("bars_fig7").style.display = "none";
    document.getElementById("bars2_fig7").style.display = "none";
    document.getElementById("bars_fig8").style.display = "none";
    document.getElementById("bars2_fig8").style.display = "none";

  }else if(bars_fig2_nivel3){
    document.getElementById("bars_fig7").style.display = "block";
    document.getElementById("bars2_fig7").style.display = "block";
    //
    document.getElementById("bars_fig1").style.display = "none";
    document.getElementById("bars2_fig1").style.display = "none";
    document.getElementById("bars_fig2").style.display = "none";
    document.getElementById("bars2_fig2").style.display = "none";
    document.getElementById("bars_fig3").style.display = "none";
    document.getElementById("bars2_fig3").style.display = "none";
    document.getElementById("bars_fig4").style.display = "none";
    document.getElementById("bars2_fig4").style.display = "none"; 
    document.getElementById("bars_fig5").style.display = "none";
    document.getElementById("bars2_fig5").style.display = "none";
    document.getElementById("bars_fig6").style.display = "none";
    document.getElementById("bars2_fig6").style.display = "none";
    document.getElementById("bars_fig8").style.display = "none";
    document.getElementById("bars2_fig8").style.display = "none";
  }else{
    document.getElementById("bars_fig8").style.display = "block";
    document.getElementById("bars2_fig8").style.display = "block";
    //
    document.getElementById("bars_fig1").style.display = "none";
    document.getElementById("bars2_fig1").style.display = "none";
    document.getElementById("bars_fig2").style.display = "none";
    document.getElementById("bars2_fig2").style.display = "none";
    document.getElementById("bars_fig3").style.display = "none";
    document.getElementById("bars2_fig3").style.display = "none";
    document.getElementById("bars_fig4").style.display = "none";
    document.getElementById("bars2_fig4").style.display = "none"; 
    document.getElementById("bars_fig5").style.display = "none";
    document.getElementById("bars2_fig5").style.display = "none";
    document.getElementById("bars_fig6").style.display = "none";
    document.getElementById("bars2_fig6").style.display = "none";
    document.getElementById("bars_fig7").style.display = "none";
    document.getElementById("bars2_fig7").style.display = "none";
  }     
}

function getPercentage(valor_figura, f_valor){ 
  if(((valor_figura-f_valor)*100) > 100 ){
  	return 0;
  }
  var valor = Math.abs(100-((valor_figura-f_valor)*100));
  if (valor > 100){ 
    valor = 100 - valor + 100; 
  }
  if (valor <= 0){
  	return 0;
  }
  return valor;
}

function getPercentageAngle(valor_figura, f_valor){ 	
	var valor = 100 - Math.abs(valor_figura-f_valor);
	if(valor == -35){
		return 17;
	}else if(valor == -80){
		return 17*2;
	}else if(valor == -125){
		return 17*3;
	}else if(valor == -170){
		return 17*4;
	}else if(valor == -215){ 
		return 17*5;
  }else if(valor == -350){ 
    return 68;
	}else if(valor == -305){ 
		return 17*5;
  }else if(valor == -395){
    return 51; 
  }else if(valor == 100){
    return 100;
  }
	return valor+30;
}

function setBarAttributesTranslationsOrAngles(barra, figura){
  $("#bar"+barra+"_fig"+figura).removeClass('progress-bar progress-bar-warning progress-bar-striped');
  $("#bar"+barra+"_fig"+figura).addClass("progress-bar progress-bar-success progress-bar-striped");
  $("#bar"+barra+"_fig"+figura).attr("style", "width:100%");
  $("#bar"+barra+"_fig"+figura).text("100%");
}

function setBarAttributesTranslationsNot(barra, figura, t_certo, t){
  if(getPercentage(t_certo, t) <= 20){
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-info progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).addClass("progress-bar progress-bar-danger progress-bar-striped");
  }else if(getPercentage(t_certo, t) > 20 && getPercentage(t_certo, t) <= 75){
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-danger progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-warning progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).addClass("progress-bar progress-bar-info progress-bar-striped");
  }else if(getPercentage(t_certo, t) > 75 && getPercentage(t_certo, t) < 100){
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-danger progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-info progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-sucess progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).addClass("progress-bar progress-bar-warning progress-bar-striped");
  }else{
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-warning progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-info progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-danger progress-bar-striped");
  }
  $("#bar"+barra+"_fig"+figura).attr("style", "width:"+getPercentage(t_certo, t)+"%");
  if(getPercentage(t_certo, t)<=0){
     $("#bar"+barra+"_fig"+figura).attr("style", "color:black");
  }
  $("#bar"+barra+"_fig"+figura).text(parseInt(getPercentage(t_certo, t))+"%");
}

function setBarAttributesAnglesNot(barra, figura, angle_certo, angle){
  if(getPercentageAngle(angle_certo, angle) <= 20){
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-info progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).addClass("progress-bar progress-bar-danger progress-bar-striped");
  }else if(getPercentageAngle(angle_certo, angle) > 20 && getPercentageAngle(angle_certo, angle) <= 75){
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-danger progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-warning progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).addClass("progress-bar progress-bar-info progress-bar-striped");
  }else if(getPercentageAngle(angle_certo, angle) > 75 && getPercentageAngle(angle_certo, angle) < 100){
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-info progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-sucess progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).addClass("progress-bar progress-bar-warning progress-bar-striped");
  }else{
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-warning progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-info progress-bar-striped");
    $("#bar"+barra+"_fig"+figura).removeClass("progress-bar progress-bar-danger progress-bar-striped");
  }
  $("#bar"+barra+"_fig"+figura).attr("style", "width:"+getPercentageAngle(angle_certo, angle)+"%");
  if(getPercentageAngle(angle_certo, angle)<=0){
     $("#bar"+barra+"_fig"+figura).attr("style", "color:black");
  }
  $("#bar"+barra+"_fig"+figura).text(parseInt(getPercentageAngle(angle_certo, angle))+"%");
}