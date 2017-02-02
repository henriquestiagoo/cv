
//----------------------------------------------------------------------------
//
// Global Variables
//

var gl = null; // WebGL context

var shaderProgram = null;
var existebotao ;
var triangleVertexPositionBuffer_F1 = null;
	
var triangleVertexColorBuffer_F1 = null;

var triangleVertexPositionBuffer_F2 = null;
	
var triangleVertexColorBuffer_F2 = null;

var triangleVertexPositionBuffer_F3 = null;
	
var triangleVertexColorBuffer_F3 = null;

// The GLOBAL transformation parameters

var globalTz = -3.5;

var nivel = 1;
var points = 4000;
var points_fim_nivel1 = 0;
var points_fim_nivel2 = 0;
var points_fim_nivel3 = 0;
var fase = 0;
var jogadas_nivel = 0;// The translation vector

var figura1_on = 0;
var figura2_on = 0;
var figura3_on = 0;

var background = 0;

var tx1 = -0.5;

var tx2 = 0.0;

var tx3 = 0.5;

var ty1 = 0.0;

var ty2 = 0.0;

var ty3 = 0.5;

var tz1 = 0.0;

var tz2 = 0.0;

var tz3 = -0.5;

// The rotation angles in degrees

var angleXX1 = 0.0;

var angleYY1 = 0.0;

var angleZZ1 = 0.0;

var angleXX2 = 0.0;

var angleYY2 = 0.0;

var angleZZ2 = 0.0;

var angleXX3 = 45;

var angleYY3 = 90.0;

var angleZZ3 = 0.0;

var globalAngleXX = 0.0;

var globalAngleYY = 0.0;

var globalAngleZZ = 0.0;
var sx1 = 0.5;

var sx2 = 0.5;

var sx3 = 0.5;

var sy1 = 0.5;

var sy2 = 0.5;

var sy3 = 0.5;

var sz1 = 0.5;

var sz2 = 0.5;

var sz3 = 0.5;
 

var block = 0.8;

//limites do  plano
var limite_dir = 1.5;
var limite_esq = -1.5;
var limite_sup = 1.5;
var limite_inf = -1.5;

var inicio = 1;

// Texture coordinates for the quadrangular faces and their color

var vertices;

var colors;


function initBuffers() {	
	
	if(background == 0){
    // Coordinates
    	if(nivel == 1){
    		vertices =  vertices_cubo();
    		colors = colors_cubo();
    	}
    	if(nivel == 2){
    		vertices = verticesStar();
    		colors = colorsStar();
    	}
    	//--------------------FIGURA 1------------------------------
	 	triangleVertexPositionBuffer_F1 = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer_F1);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		triangleVertexPositionBuffer_F1.itemSize = 3;
		triangleVertexPositionBuffer_F1.numItems = vertices.length / 3;

		// Associating to the vertex shader
  		gl.useProgram(shaderProgram);
		gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 
				triangleVertexPositionBuffer_F1.itemSize, 
				gl.FLOAT, false, 0, 0);

		// Colors
		
		triangleVertexColorBuffer_F1 = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer_F1);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
		triangleVertexColorBuffer_F1.itemSize = 3;
		triangleVertexColorBuffer_F1.numItems = colors.length / 3;			

		// Associating to the vertex shader
		gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, 
				triangleVertexColorBuffer_F1.itemSize, 
				gl.FLOAT, false, 0, 0);

		//--------------------FIGURA 2 ------------------------------
		if(nivel == 1){
			vertices = verticesPiramideQuadrangular();
			colors = colorsPiramideQuandrangular();
		}
		if(nivel == 2){
			vertices = verticesPiramideVerde();
			colors = colorsPiramideQuandrangularVerde();
		}
		triangleVertexPositionBuffer_F2 = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer_F2);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		triangleVertexPositionBuffer_F2.itemSize = 3;
		triangleVertexPositionBuffer_F2.numItems = vertices.length / 3;

		// Associating to the vertex shader
  		gl.useProgram(shaderProgram);
		gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 
				triangleVertexPositionBuffer_F2.itemSize, 
				gl.FLOAT, false, 0, 0);

		// Colors
		
		triangleVertexColorBuffer_F2 = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer_F2);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
		triangleVertexColorBuffer_F2.itemSize = 3;
		triangleVertexColorBuffer_F2.numItems = colors.length / 3;			

		// Associating to the vertex shader
		gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, 
				triangleVertexColorBuffer_F2.itemSize, 
				gl.FLOAT, false, 0, 0);
		if(nivel == 2){

			vertices = verticesParalelipipedo();
			colors = colorsParalelipipedo();
			triangleVertexPositionBuffer_F3 = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer_F3);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
			triangleVertexPositionBuffer_F3.itemSize = 3;
			triangleVertexPositionBuffer_F3.numItems = vertices.length / 3;

			// Associating to the vertex shader
	  		gl.useProgram(shaderProgram);
			gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 
					triangleVertexPositionBuffer_F3.itemSize, 
					gl.FLOAT, false, 0, 0);

			// Colors
			
			triangleVertexColorBuffer_F3 = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer_F3);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
			triangleVertexColorBuffer_F3.itemSize = 3;
			triangleVertexColorBuffer_F3.numItems = colors.length / 3;			

			// Associating to the vertex shader
			gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, 
				triangleVertexColorBuffer_F3.itemSize, 
				gl.FLOAT, false, 0, 0);
		}
  	}

	if(background == 1){
	 	gl.useProgram(shaderProgram_back);	
		cubeVertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices_back), gl.STATIC_DRAW);
		cubeVertexPositionBuffer.itemSize = 3;
		cubeVertexPositionBuffer.numItems = vertices_back.length / 3;			

		// Textures
			
	    cubeVertexTextureCoordBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
	 	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	    cubeVertexTextureCoordBuffer.itemSize = 2;
	    cubeVertexTextureCoordBuffer.numItems = 4;			

		// Vertex indices
		
	    cubeVertexIndexBuffer = gl.createBuffer();
	    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
	    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
	    cubeVertexIndexBuffer.itemSize = 1;
	    cubeVertexIndexBuffer.numItems = 6;
	    if(nivel == 3){
	    	initBuffersNivel3();
		}
	}

	gl.enable(gl.DEPTH_TEST);
}

//----------------------------------------------------------------------------
//  Drawing the model

function drawModel( angleXX, angleYY, angleZZ, 
					sx, sy, sz,
					tx, ty, tz,
					mvMatrix,
					primitiveType, background , figura) {

    mvMatrix = mult(mvMatrix, translationMatrix(tx, ty, tz));
	mvMatrix = mult(mvMatrix, rotationYYMatrix(angleYY));
	mvMatrix = mult(mvMatrix, rotationXXMatrix(angleXX));
	mvMatrix = mult(mvMatrix, rotationZZMatrix(angleZZ));
	mvMatrix = mult(mvMatrix, scalingMatrix(sx, sy, sz));

  	if(!background){
  		if(nivel == 1 || nivel ==2){
	  		gl.useProgram(shaderProgram);
			var mvUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
			gl.uniformMatrix4fv(mvUniform, false, new Float32Array(flatten(mvMatrix)));
			if(nivel == 1){
		  		if(figura == "cubo"){			
				    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer_F1);
			    	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
			                          			triangleVertexPositionBuffer_F1.itemSize,
			                          			gl.FLOAT, false, 0, 0);

			    	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer_F1);

			    	gl.vertexAttribPointer(shaderProgram.vertexColorAttribute,
			                                triangleVertexColorBuffer_F1.itemSize,
			                                gl.FLOAT, false, 0, 0);
			   		gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer_F1.numItems);

		   		}
		   		if(figura == "piramideQuandrangular"){
				    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer_F2);
			    	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
			                          			triangleVertexPositionBuffer_F2.itemSize,
			                          			gl.FLOAT, false, 0, 0);

			    	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer_F2);

			    	gl.vertexAttribPointer(shaderProgram.vertexColorAttribute,
			                                triangleVertexColorBuffer_F2.itemSize,
			                                gl.FLOAT, false, 0, 0);
			   		gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer_F2.numItems);
		   		}
	   		}
	   		if(nivel == 2){
	   			if(figura == "estrela"){			
				    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer_F1);
			    	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
			                          			triangleVertexPositionBuffer_F1.itemSize,
			                          			gl.FLOAT, false, 0, 0);

			    	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer_F1);

			    	gl.vertexAttribPointer(shaderProgram.vertexColorAttribute,
			                                triangleVertexColorBuffer_F1.itemSize,
			                                gl.FLOAT, false, 0, 0);
			   		gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer_F1.numItems);

		   		}
		   		if(figura == "piramideVerde"){
				    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer_F2);
			    	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
			                          			triangleVertexPositionBuffer_F2.itemSize,
			                          			gl.FLOAT, false, 0, 0);

			    	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer_F2);

			    	gl.vertexAttribPointer(shaderProgram.vertexColorAttribute,
			                                triangleVertexColorBuffer_F2.itemSize,
			                                gl.FLOAT, false, 0, 0);
			   		gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer_F2.numItems);
		   		}
		   		if(figura == "paralelipipedo"){
				    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer_F3);
			    	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
			                          			triangleVertexPositionBuffer_F3.itemSize,
			                          			gl.FLOAT, false, 0, 0);

			    	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer_F3);

			    	gl.vertexAttribPointer(shaderProgram.vertexColorAttribute,
			                                triangleVertexColorBuffer_F3.itemSize,
			                                gl.FLOAT, false, 0, 0);
			   		gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer_F3.numItems);
		   		}
	   		}
   		}
  	}
  	else
  	{
  		gl.useProgram(shaderProgram_back);
		var mvUniform = gl.getUniformLocation(shaderProgram_back, "uMVMatrix");

	  	gl.uniformMatrix4fv(mvUniform, false, new Float32Array(flatten(mvMatrix)));

	    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);

	    gl.vertexAttribPointer(shaderProgram_back.vertexPositionAttribute, cubeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
	    gl.vertexAttribPointer(shaderProgram_back.textureCoordAttribute, cubeVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	    gl.activeTexture(gl.TEXTURE0);
	    gl.bindTexture(gl.TEXTURE_2D, webGLTexture);

	    gl.uniform1i(shaderProgram_back.samplerUniform, 0);

	    // The vertex indices

	    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);

		gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
	  	
  	}
  	if(nivel == 3){
	  		gl.useProgram(shaderProgram_back);
			var mvUniform = gl.getUniformLocation(shaderProgram_back, "uMVMatrix");
			gl.uniformMatrix4fv(mvUniform, false, new Float32Array(flatten(mvMatrix)));
			if(figura == "cubo"){
				drawModelNivel3("cubo");
			}
			if(figura == "piramide"){
				drawModelNivel3("piramide");
			}
			if(figura == "paralelipipedo"){
				drawModelNivel3("paralelipipedo");
			}
	 }		
}

//----------------------------------------------------------------------------

//  Drawing the 3D scene

function drawScene() {
	
	var pMatrix;
	
	var mvMatrix = mat4();

	var mvMatrix2 = mat4();

	var mvMatrix3 = mat4();

	var mvMatrix_back = mat4();

	pMatrix = perspective( 45, 1, 0.05, 15 );

	gl.enable( gl.DEPTH_TEST );

	// Background = 0
	if(nivel == 1 || nivel == 2){
		gl.useProgram(shaderProgram);
		var pUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");

		gl.uniformMatrix4fv(pUniform, false, new Float32Array(flatten(pMatrix)));

		mvMatrix = translationMatrix(0, 0, globalTz);
	  	mvMatrix = mult(translationMatrix(0, 0, globalTz),
		                rotationYYMatrix(globalAngleYY));
	 	mvMatrix = mult(mult(translationMatrix(0, 0, globalTz),
		                rotationYYMatrix(globalAngleYY)),
		                rotationXXMatrix(globalAngleXX));


		mvMatrix2 = translationMatrix(0, 0, globalTz);
	  	mvMatrix2 = mult(translationMatrix(0, 0, globalTz),
		                rotationYYMatrix(globalAngleYY));
	 	mvMatrix2 = mult(mult(translationMatrix(0, 0, globalTz),
		                rotationYYMatrix(globalAngleYY)),
		                rotationXXMatrix(globalAngleXX));
	 	if(nivel == 1){
			drawModel( angleXX1, angleYY1, angleZZ1,  // CW rotations
			           sx1, sy1, sz1,
			           tx1, ty1, tz1,
			           mvMatrix2,
			           primitiveType, false , "piramideQuandrangular" );
				
			drawModel( angleXX2, angleYY2, angleZZ2, 
			           sx2, sy2, sz2,
			           tx2, ty2, tz2,
			           mvMatrix,
			           primitiveType, false, "cubo" );

		//background = 1;
		}
		if(nivel == 2){

			mvMatrix3 = translationMatrix(0, 0, globalTz);
		  	mvMatrix3 = mult(translationMatrix(0, 0, globalTz),
			                rotationYYMatrix(globalAngleYY));
		 	mvMatrix3 = mult(mult(translationMatrix(0, 0, globalTz),
		                rotationYYMatrix(globalAngleYY)),
		                rotationXXMatrix(globalAngleXX));

			drawModel( angleXX1, angleYY1, angleZZ1,  // CW rotations
			           sx1, sy1, sz1,
			           tx1, ty1, tz1,
			           mvMatrix2,
			           primitiveType, false , "estrela" );
				
			drawModel( angleXX2, angleYY2, angleZZ2, 
			           sx2, sy2, sz2,
			           tx2, ty2, tz2,
			           mvMatrix,
			           primitiveType, false, "piramideVerde" );

			drawModel( angleXX3, angleYY3, angleZZ3, 
			           sx3, sy3, sz3,
			           tx3, ty3, tz3,
			           mvMatrix3,
			           primitiveType, false, "paralelipipedo" );
		}
	}
	gl.useProgram(shaderProgram_back);
	var pUniform1 = gl.getUniformLocation(shaderProgram_back, "uPMatrix");

	gl.uniformMatrix4fv(pUniform1, false, new Float32Array(flatten(pMatrix)));

	mvMatrix_back = translationMatrix(0, 0, globalTz);
  	mvMatrix_back = mult(translationMatrix(0, 0, globalTz),
	                rotationYYMatrix(globalAngleYY));
 	mvMatrix_back = mult(mult(translationMatrix(0, 0, globalTz),
	                rotationYYMatrix(globalAngleYY)),
	                rotationXXMatrix(globalAngleXX));

	drawModel( angleXX_back, angleYY_back, angleZZ_back, 
	           sx_back, sy_back, sz_back,
	           tx_back, ty_back, tz_back,
	           mvMatrix_back,
	           primitiveType, true);
	if(nivel == 3){
		mvMatrix = translationMatrix(0, 0, globalTz);
	  	mvMatrix = mult(translationMatrix(0, 0, globalTz),
		                rotationYYMatrix(globalAngleYY));
	 	mvMatrix = mult(mult(translationMatrix(0, 0, globalTz),
		                rotationYYMatrix(globalAngleYY)),
		                rotationXXMatrix(globalAngleXX));

		mvMatrix2 = translationMatrix(0, 0, globalTz);
	  	mvMatrix2 = mult(translationMatrix(0, 0, globalTz),
		                rotationYYMatrix(globalAngleYY));
	 	mvMatrix2 = mult(mult(translationMatrix(0, 0, globalTz),
		                rotationYYMatrix(globalAngleYY)),
		                rotationXXMatrix(globalAngleXX));

		mvMatrix3 = translationMatrix(0, 0, globalTz);
	  	mvMatrix3 = mult(translationMatrix(0, 0, globalTz),
		                rotationYYMatrix(globalAngleYY));
	 	mvMatrix3 = mult(mult(translationMatrix(0, 0, globalTz),
	                rotationYYMatrix(globalAngleYY)),
		            rotationXXMatrix(globalAngleXX));

 		drawModel( angleXX1, angleYY1, angleZZ1, 
			           sx1, sy1, sz1,
			           tx1, ty1, tz1,
			           mvMatrix,
			           primitiveType, false, "piramide" );

 		drawModel( angleXX2, angleYY2, angleZZ2, 
			           sx2, sy2, sz2,
			           tx2, ty2, tz2,
			           mvMatrix2,
			           primitiveType, false, "cubo" );

 		drawModel( angleXX3, angleYY3, angleZZ3, 
			           sx3, sy3, sz3,
			           tx3, ty3, tz3,
			           mvMatrix3,
			           primitiveType, false, "paralelipipedo" );
	}
}

//----------------------------------------------------------------------------

// Handling keyboard events

// Adapted from www.learningwebgl.com

var currentlyPressedKeys = {};

function handleKeys() {

 	if(currentlyPressedKeys[107]){
		// add key (+)
		globalTz += 0.1;

	}else if(currentlyPressedKeys[109]){
		// subtract key (-)
		globalTz -= 0.1;
	}
	
	currentlyPressedKeys={};
}

//----------------------------------------------------------------------------

// Timer

function tick() {
	
	requestAnimFrame(tick);

	handleKeys();
	
	drawScene();
}

//----------------------------------------------------------------------------


function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

var mouseDown = false;
var lastMouseX = null;
var lastMouseY = null;

function handleMouseDown(event) {
    mouseDown = true;
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
}
function handleMouseUp(event) {
    mouseDown = false;
}

function handleMouseMove(event) {
    if (!mouseDown) {
        return;
    }
    var newX = event.clientX;
    var newY = event.clientY;
    var deltaX = newX - lastMouseX;
    var deltaY = newY - lastMouseY;

    globalAngleXX += radians(10 * deltaY);
    globalAngleYY += radians(10 * deltaX);
    globalAngleXX_back += radians(10 * deltaY);
    globalAngleYY_back += radians(10 * deltaX);

    drawScene();  

    lastMouseX = newX;
    lastMouseY = newY;
}

//----------------------------------------------------------------------------
//
// WebGL Initialization
//

function initWebGL( canvas ) {
	try {
		
		gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
		
		primitiveType = gl.TRIANGLES;
		
		gl.enable( gl.CULL_FACE );
		
		gl.cullFace( gl.BACK );
        
	} catch (e) {
	}
	if (!gl) {
		alert("Error");
	}        
}

function getRandomArbitrary(min, max) {
    var random = Math.random() * (max - min) + min;
    if(random <= 0.0){
    	random = -0.5;
    }
    else if(random <= 0.5 && random > 0){
    	random = 0.0;
    }
    else if(random > 0.5 && random <= 0.8){
    	random = 0.5;
    }
    else{
    	random = 0.5;
    }
    return random;
}
function reset(){
	if(nivel == 1){	
		tx1 = getRandomArbitrary(-0.5,1.0);
		ty1 =  getRandomArbitrary(-0.5,1.0);
		tz1 =  0.0
		angleXX1 = 0.0;
		angleYY1 = 0.0;
		angleZZ1 = 0.0;  
		tx2 =  getRandomArbitrary(-0.5,1.0);
		ty2 =  getRandomArbitrary(-0.5,1.0); 
		tz2 = 0.0;
		angleXX2 = 0.0;
		angleYY2 = 0.0;
		angleZZ2 = 0.0;  
		tx_back = 0.0;
		ty_back = 0.0;
		tz_back = 0.0;
		angleXX_back = 0.0;
		angleYY_back = 0.0;
		angleZZ_back = 0.0; 
		globalAngleXX = 0.0;
		globalAngleYY = 0.0;
		globalAngleXX_back = 0.0;
		globalAngleYY_back = 0.0;
		if((tx1 >= 0.0 && tx1 <= 0.5 && ty1 >= 0.0 && ty1 <= 0.5 && tx2 >= 0.0 && tx2 <= 0.5 && ty2 >= 0.0 && ty2 <= 0.5) || (tx1 >= -0.5 && tx1 <= 0.0 && ty1 >= -0.5 && ty1 <= 0.0 && tx2 >= -0.5 && tx2 <= 0.0 && ty2 >= -0.5 && ty2 <= 0.0)){
			jogadas_nivel = 30;
		}
		else{
			jogadas_nivel = 40;
		}
		document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
		points = 4000; 
		document.getElementById("points").innerHTML=points;
		acertou = 0;
		hit_x1 = hit_y1 = hit_z1 = hit_angX1 = hit_angY1 = hit_angZ1 = false;
		hit_x2 = hit_y2 = hit_z2 = hit_angX2 = hit_angY2 = hit_angZ2 = false;
		positionsNot();
		if(inicial == false){
			acertou_inicial_nivel1(tx1,ty1,tz1,angleXX1,angleYY1,angleZZ1,tx2,ty2,tz2,angleXX2,angleYY2,angleZZ2);
		}
		inicial = false;
	}
	if(nivel == 2){	
		tx1 = getRandomArbitrary(-0.5,1.0);
		ty1 = getRandomArbitrary(-0.5,1.0);
		tz1 = 0.0;
		angleXX1 = 0.0;
		angleYY1 = 0.0;
		angleZZ1 = 0.0;  
		tx2 = getRandomArbitrary(-0.5,1.0);
		ty2 = getRandomArbitrary(-0.5,1.0); 
		tz2 = 0.0;
		angleXX2 = 0.0;
		angleYY2 = 0.0;
		angleZZ2 = 0.0;
		tx3 = getRandomArbitrary(-0.5,1.0);
		ty3 = getRandomArbitrary(-0.5,1.0);
		tz3 = -0.5; 
		angleXX3 = 45;
		angleYY3 = 0.0;
		angleZZ3 = 0.0; 
		tx_back = 0.0;
		ty_back = 0.0;
		tz_back = 0.0;
		angleXX_back = 0.0;
		angleYY_back = 0.0;
		angleZZ_back = 0.0; 
		globalAngleXX = 0.0;
		globalAngleYY = 0.0;
		globalAngleXX_back = 0.0;
		globalAngleYY_back = 0.0;
		if(tx1 >= -0.5 && tx1 <= 0.5 && ty1 >= 0.0 && ty1 <= 0.5 && tx2 >= 0.0 && tx2 <= 0.5 && ty2 >= 0.0 && ty2 <= 0.5 && tx3 >= -0.5 && tx3 <= 0.5 && ty3 >= 0.0 && ty3 <= 0.5){
			jogadas_nivel = 90;
		}
		else{
			jogadas_nivel = 150;
		}
		document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
		points = points_fim_nivel1; 
		document.getElementById("points").innerHTML=points;
		acertou = 0;
		hit_x1 = hit_y1 = hit_z1 = hit_angX1 = hit_angY1 = hit_angZ1 = false;
		hit_x2 = hit_y2 = hit_z2 = hit_angX2 = hit_angY2 = hit_angZ2 = false;
		hit_x3 = hit_y3 = hit_z3 = hit_angX3 = hit_angY3 = hit_angZ3 = false;
		positionsNot();
		if(!inicial){
			acertou_inicial_nivel2(tx1,ty1,tz1,angleXX1,angleYY1,angleZZ1,tx2,ty2,tz2,angleXX2,angleYY2,angleZZ2,tx3,ty3,tz3,angleXX3,angleYY3,angleZZ3);
		}
		inicial = false;
	}
	if(nivel == 3){
		tx1 = getRandomArbitrary(-0.5,1.0);
		ty1 = getRandomArbitrary(-0.5,1.0); 
		tz1 = 0.0;
		angleXX1 = 0.0;
		angleYY1 = 0.0;
		angleZZ1 = 0.0;  
		tx2 = getRandomArbitrary(-0.5,1.0);
		ty2 = getRandomArbitrary(-0.5,1.0); 
		tz2 = 0.0;
		angleXX2 = 0.0;
		angleYY2 = 0.0;
		angleZZ2 = 0.0;
		tx3 = getRandomArbitrary(-0.5,1.0);
		ty3 = getRandomArbitrary(-0.5,1.0);
		tz3 = -0.5; 
		tx_back = 0.0;
		ty_back = 0.0;
		tz_back = 0.0;
		angleXX3 = 45;
		angleYY3 = 0.0;
		angleZZ3 = 0.0; 
		angleXX_back = 0.0;
		angleYY_back = 0.0;
		angleZZ_back = 0.0; 
		globalAngleXX = 0.0;
		globalAngleYY = 0.0;
		globalAngleXX_back = 0.0;
		globalAngleYY_back = 0.0;
		if(tx1 >= -0.5 && tx1 <= 0.5 && ty1 >= 0.0 && ty1 <= 0.5 && tx2 >= 0.0 && tx2 <= 0.5 && ty2 >= 0.0 && ty2 <= 0.5 && tx3 >= -0.5 && tx3 <= 0.5 && ty3 >= 0.0 && ty3 <= 0.5){
			jogadas_nivel = 100;
		}
		else{
			jogadas_nivel = 180;
		}
		document.getElementById("jogadas").innerHTML="Jogadas disponiveis: " + jogadas_nivel;
		points = points_fim_nivel2; 
		document.getElementById("points").innerHTML=points;
		acertou = 0;
		hit_x1 = hit_y1 = hit_z1 = hit_angX1 = hit_angY1 = hit_angZ1 = false;
		hit_x2 = hit_y2 = hit_z2 = hit_angX2 = hit_angY2 = hit_angZ2 = false;
		hit_x3 = hit_y3 = hit_z3 = hit_angX3 = hit_angY3 = hit_angZ3 = false;
		positionsNot();
		if(!inicial){
			acertou_inicial_nivel3(tx1,ty1,tz1,angleXX1,angleYY1,angleZZ1,tx2,ty2,tz2,angleXX2,angleYY2,angleZZ2,tx3,ty3,tz3,angleXX3,angleYY3,angleZZ3);
		}
		inicial = false;
	}
}

//----------------------------------------------------------------------------

function runWebGL() {
	
	var canvas = document.getElementById("my-canvas");
	
	initWebGL( canvas );
	if(nivel == 1 || nivel == 2){
		shaderProgram = initShaders( gl );
		initBuffers();
	}
	background = 1;

	shaderProgram_back = initShaders_back( gl );

	initBuffers();

	initTexture();	
	if(nivel == 1){
		existebotao = false;
	}
	if(nivel == 2){
		if(!existebotao){
			var button = document.createElement("button");
			button.className = "btn btn-tumblr btn3d";
			button.id = "figura3";
			document.getElementById("choose_fig").appendChild(button);	
			existebotao = true;
		}
		document.getElementById("figura3").innerHTML="paralelipipedo";
	}
	else if(nivel == 3){
		if(!existebotao){
			var button = document.createElement("button");
			button.className = "btn btn-tumblr btn3d";
			button.id = "figura3";
			document.getElementById("choose_fig").appendChild(button);
			existebotao = true;
		}
		document.getElementById("figura3").innerHTML="Paralelipipedo";
	}

	setEventListeners(canvas);

	tick();

	if(inicio){
		setProgressBars();
		inicio=0;
	}

	if(nivel == 1){
		getBarsReset(1,0,0,0,0,0,0,0);
		getVisibleBars();
		acertou_inicial_nivel1(tx1,ty1,tz1,angleXX1,angleYY1,angleZZ1,tx2,ty2,tz2,angleXX2,angleYY2,angleZZ2);
		if(tx1 >= 0.0 && tx1 <= 0.5 && ty1 >= 0.0 && ty1 <= 0.5 && tx2 >= 0.0 && tx2 <= 0.5 && ty2 >= 0.0 && ty2 <= 0.5){
			jogadas_nivel = 30;
		}
		else{
			jogadas_nivel = 50;
		}
	}else if(nivel == 2){
		getBarsReset(0,0,1,0,0,0,0,0);
		getVisibleBars();
		acertou_inicial_nivel2(tx1,ty1,tz1,angleXX1,angleYY1,angleZZ1,tx2,ty2,tz2,angleXX2,angleYY2,angleZZ2,tx3,ty3,tz3,angleXX3,angleYY3,angleZZ3);
		jogadas_nivel = 90;
	}else if(nivel == 3){
		getBarsReset(0,0,0,0,0,1,0,0);
		getVisibleBars();
		acertou_inicial_nivel3(tx1,ty1,tz1,angleXX1,angleYY1,angleZZ1,tx2,ty2,tz2,angleXX2,angleYY2,angleZZ2,tx3,ty3,tz3,angleXX3,angleYY3,angleZZ3);
		jogadas_nivel = 100;
	}
}