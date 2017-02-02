
/* Nivel 3 related */

var cubeVertexPositionBuffer_cubo_nivel3 = null;

var cubeVertexIndexBuffer_cubo_nivel3 = null;

var cubeVertexTextureCoordBuffer_cubo_nivel3;

var cubeVertexPositionBuffer_piramide_nivel3 = null;

var cubeVertexIndexBuffer_piramide_nivel3 = null;

var cubeVertexTextureCoordBuffer_piramide_nivel3;


var cubeVertexPositionBuffer_paralelipipedo_nivel3 = null;

var cubeVertexIndexBuffer_paralelipipedo_nivel3 = null;

var cubeVertexTextureCoordBuffer_paralelipipedo_nivel3;

var vertices_Cubo = [
            // Front face
            -0.45, -0.45,  0.45,
             0.45, -0.45,  0.45,
             0.45,  0.45,  0.45,
            -0.45,  0.45,  0.45,

            // Back face
            -0.45, -0.45, -0.45,
            -0.45,  0.45, -0.45,
            0.45,  0.45, -0.45,
            0.45, -0.45, -0.45,

            // Top face
            -0.45,  0.45, -0.45,
            -0.45,  0.45,  0.45,
             0.45,  0.45,  0.45,
             0.45,  0.45, -0.45,

            // Bottom face
            -0.45, -0.45, -0.45,
            0.45, -0.45, -0.45,
            0.45, -0.45,  0.45,
            -0.45, -0.45,  0.45,

            // Right face
             0.45, -0.45, -0.45,
             0.45,  0.45, -0.45,
             0.45,  0.45,  0.45,
             0.45, -0.45,  0.45,

            // Left face
            -0.45, -0.45, -0.45,
            -0.45, -0.45,  0.45,
            -0.45,  0.45,  0.45,
            -0.45,  0.45, -0.45,
];

var verticesPiramide = [
		-0.45, -0.45,  0.45,
		 0.45, -0.45,  0.45,
		 0.0,  0.55,  0.0,

		 0.45, -0.45, -0.45, 		
 	    -0.45, -0.45, -0.45, 	
 		 0.0,   0.55,  0.0,

		// Bottom face
        -0.45, -0.45, -0.45,
         0.45, -0.45, -0.45,
         0.45, -0.45,  0.45,
        -0.45, -0.45,  0.45,

 		 0.45, -0.45,  0.45, 		
 		 0.45, -0.45, -0.45,  	
 		 0.0,   0.55,  0.0,  	

 	    -0.45, -0.45,  0.45, 	
 		 0.0,   0.55, 0.0,  	
 	    -0.45, -0.45, -0.45,  	
	];


var vertices_Paralelipipedo = [
        // Front face
        -0.65, -0.35,  0.35,
         0.65, -0.35,  0.35,
         0.65,  0.35,  0.35,
        -0.65,  0.35,  0.35,

        // Back face
        -0.65, -0.35, -0.35,
        -0.65,  0.35, -0.35,
        0.65,  0.35, -0.35,
        0.65, -0.35, -0.35,

        // Top face
        -0.65,  0.35, -0.35,
        -0.65,  0.35,  0.35,
         0.65,  0.35,  0.35,
         0.65,  0.35, -0.35,

        // Bottom face
        -0.65, -0.35, -0.35,
        0.65, -0.35, -0.35,
        0.65, -0.35,  0.35,
        -0.65, -0.35,  0.35,

        // Right face
         0.65, -0.35, -0.35,
         0.65,  0.35, -0.35,
         0.65,  0.35,  0.35,
         0.65, -0.35,  0.35,

        // Left face
        -0.65, -0.35, -0.35,
        -0.65, -0.35,  0.35,
        -0.65,  0.35,  0.35,
        -0.65,  0.35, -0.35,
];

// Texture coordinates for the quadrangular faces

// Notice how they are assigne to the corresponding vertices

var textureCoordsCubo = [
		// Front face
          0.0, 0.0,
          1.0, 0.0,
          1.0, 1.0,
          0.0, 1.0,

          // Back face
          1.0, 0.0,
          1.0, 1.0,
          0.0, 1.0,
          0.0, 0.0,

          // Top face
          0.0, 1.0,
          0.0, 0.0,
          1.0, 0.0,
          1.0, 1.0,

          // Bottom face
          1.0, 1.0,
          0.0, 1.0,
          0.0, 0.0,
          1.0, 0.0,
          
          // Right face
          1.0, 0.0,
          1.0, 1.0,
          0.0, 1.0,
          0.0, 0.0,

          // Left face
          0.0, 0.0,
          1.0, 0.0,
          1.0, 1.0,
          0.0, 1.0,
];


var textureCoordsPiramide = [
          // Front face
          0.0, 0.0,
          1.0, 0.0,
          1.0, 1.0,
          //0.0, 1.0,

          // Back face
          1.0, 0.0,
          1.0, 1.0,
          0.0, 1.0,
         // 0.0, 0.0,


          // Bottom face
          1.0, 1.0,
          0.0, 1.0,
          0.0, 0.0,
          1.0, 0.0,

          // Right face
          1.0, 0.0,
          1.0, 1.0,
          0.0, 1.0,
          //0.0, 0.0,

          // Left face
          0.0, 0.0,
          1.0, 0.0,
          1.0, 1.0,
         // 0.0, 1.0,
];
// Vertex indices defining the triangles
        
var cubeVertexIndicesCubo = [
            0, 1, 2,      0, 2, 3,    // Front face

            4, 5, 6,      4, 6, 7,    // Back face

            8, 9, 10,     8, 10, 11,  // Top face

            12, 13, 14,   12, 14, 15, // Bottom face

            16, 17, 18,   16, 18, 19, // Right face

            20, 21, 22,   20, 22, 23  // Left face
];

var cubeVertexIndicesPiramide = [
            0, 1, 2,         	// Front face

            3, 4, 5,        	// Back face

            6, 7, 8,   6, 8, 9, // Bottom face

            10, 11, 12,    		// Right face

            13, 14, 15,    		// Left face
];

var webGLTextureV;
var webGLTextureC;
var webGLTextureM;
var webGLTextureL;
var webGLTexturePiramide;
var webGLTexture1617;
var webGLTextureua;
var webGLTextureTiago;
var webGLTextureFilipe;

function initTextureNivel3() {
	
	webGLTextureV = gl.createTexture();
	webGLTextureV.image = new Image();
	webGLTextureV.image.onload = function () {
		handleLoadedTexture(webGLTextureV)
	}

	webGLTextureV.image.src = "imgs/v.jpg";

	webGLTextureFilipe = gl.createTexture();
	webGLTextureFilipe.image = new Image();
	webGLTextureFilipe.image.onload = function () {
		handleLoadedTexture(webGLTextureFilipe)
	}

	webGLTextureFilipe.image.src = "imgs/filipe.jpg";

	webGLTextureTiago = gl.createTexture();
	webGLTextureTiago.image = new Image();
	webGLTextureTiago.image.onload = function () {
		handleLoadedTexture(webGLTextureTiago)
	}

	webGLTextureTiago.image.src = "imgs/tiago.jpg";

	webGLTextureua = gl.createTexture();
	webGLTextureua.image = new Image();
	webGLTextureua.image.onload = function () {
		handleLoadedTexture(webGLTextureua)
	}

	webGLTextureua.image.src = "imgs/ua.png";

	webGLTextureC = gl.createTexture();
	webGLTextureC.image = new Image();
	webGLTextureC.image.onload = function () {
		handleLoadedTexture(webGLTextureC)
	}

	webGLTextureC.image.src = "imgs/c.jpg";


	webGLTextureM = gl.createTexture();
	webGLTextureM.image = new Image();
	webGLTextureM.image.onload = function () {
	handleLoadedTexture(webGLTextureM)
	}

	webGLTextureM.image.src = "imgs/m.jpg";

	webGLTextureL = gl.createTexture();
	webGLTextureL.image = new Image();
	webGLTextureL.image.onload = function () {
		handleLoadedTexture(webGLTextureL)
	}

	webGLTextureL.image.src = "imgs/l.jpg";

	webGLTextureS = gl.createTexture();
	webGLTextureS.image = new Image();
	webGLTextureS.image.onload = function () {
	handleLoadedTexture(webGLTextureS)
	}

	webGLTextureS.image.src = "imgs/s.jpg";

	webGLTexturePiramide = gl.createTexture();
	webGLTexturePiramide.image = new Image();
	webGLTexturePiramide.image.onload = function () {
		handleLoadedTexture(webGLTexturePiramide)
	}

	webGLTexturePiramide.image.src = "imgs/piramide.jpg";

	webGLTexture1617 = gl.createTexture();
	webGLTexture1617.image = new Image();
	webGLTexture1617.image.onload = function () {
	handleLoadedTexture(webGLTexture1617)
	}

	webGLTexture1617.image.src = "imgs/16.png";

}


function initBuffersNivel3() {	
	
	// Coordinates cubo
	cubeVertexPositionBuffer_cubo_nivel3 = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer_cubo_nivel3);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices_Cubo), gl.STATIC_DRAW);
	cubeVertexPositionBuffer_cubo_nivel3.itemSize = 3;
	cubeVertexPositionBuffer_cubo_nivel3.numItems = vertices.length / 3;			

	// Textures
		
    cubeVertexTextureCoordBuffer_cubo_nivel3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer_cubo_nivel3);
 	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsCubo), gl.STATIC_DRAW);
    cubeVertexTextureCoordBuffer_cubo_nivel3.itemSize = 2;
    cubeVertexTextureCoordBuffer_cubo_nivel3.numItems = 24;			

	// Vertex indices
	
    cubeVertexIndexBuffer_cubo_nivel3 = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer_cubo_nivel3);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesCubo), gl.STATIC_DRAW);
    cubeVertexIndexBuffer_cubo_nivel3.itemSize = 1;
    cubeVertexIndexBuffer_cubo_nivel3.numItems = 36;
    
    //cordinates piramide
    cubeVertexPositionBuffer_piramide_nivel3 = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer_piramide_nivel3);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticesPiramide), gl.STATIC_DRAW);
	cubeVertexPositionBuffer_piramide_nivel3.itemSize = 3;
	cubeVertexPositionBuffer_piramide_nivel3.numItems = vertices.length / 3;			

	// Textures
		
    cubeVertexTextureCoordBuffer_piramide_nivel3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer_piramide_nivel3);
 	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsPiramide), gl.STATIC_DRAW);
    cubeVertexTextureCoordBuffer_piramide_nivel3.itemSize = 2;
    cubeVertexTextureCoordBuffer_piramide_nivel3.numItems = 24;			

	// Vertex indices
	
    cubeVertexIndexBuffer_piramide_nivel3 = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer_piramide_nivel3);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesPiramide), gl.STATIC_DRAW);
    cubeVertexIndexBuffer_piramide_nivel3.itemSize = 1;
    cubeVertexIndexBuffer_piramide_nivel3.numItems = 36;


    // Coordinates paralelipipedo
	cubeVertexPositionBuffer_paralelipipedo_nivel3 = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer_paralelipipedo_nivel3);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices_Paralelipipedo), gl.STATIC_DRAW);
	cubeVertexPositionBuffer_paralelipipedo_nivel3.itemSize = 3;
	cubeVertexPositionBuffer_paralelipipedo_nivel3.numItems = vertices.length / 3;			

	// Textures
		
    cubeVertexTextureCoordBuffer_paralelipipedo_nivel3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer_paralelipipedo_nivel3);
 	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordsCubo), gl.STATIC_DRAW);
    cubeVertexTextureCoordBuffer_paralelipipedo_nivel3.itemSize = 2;
    cubeVertexTextureCoordBuffer_paralelipipedo_nivel3.numItems = 24;			

	// Vertex indices
	
    cubeVertexIndexBuffer_paralelipipedo_nivel3 = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer_paralelipipedo_nivel3);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndicesCubo), gl.STATIC_DRAW);
    cubeVertexIndexBuffer_paralelipipedo_nivel3.itemSize = 1;
    cubeVertexIndexBuffer_paralelipipedo_nivel3.numItems = 36;
}

function drawModelNivel3(figura){

	if(figura == "cubo"){
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer_cubo_nivel3);
    
	    gl.vertexAttribPointer(shaderProgram_back.vertexPositionAttribute, cubeVertexPositionBuffer_cubo_nivel3.itemSize, gl.FLOAT, false, 0, 0);

		// NEW --- Textures
		
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer_cubo_nivel3);
	    gl.vertexAttribPointer(shaderProgram_back.textureCoordAttribute, cubeVertexTextureCoordBuffer_cubo_nivel3.itemSize, gl.FLOAT, false, 0, 0);

	    gl.activeTexture(gl.TEXTURE0);
	         
	    gl.uniform1i(shaderProgram_back.samplerUniform, 0);
	    
	    // The vertex indices
	    
	    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer_cubo_nivel3);

	    gl.bindTexture(gl.TEXTURE_2D, webGLTexturePiramide);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);	

	    gl.bindTexture(gl.TEXTURE_2D, webGLTextureC);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 12);	

		gl.bindTexture(gl.TEXTURE_2D, webGLTextureS);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 24);

		gl.bindTexture(gl.TEXTURE_2D, webGLTextureM);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 36);

		gl.bindTexture(gl.TEXTURE_2D, webGLTextureS);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 48);

		gl.bindTexture(gl.TEXTURE_2D, webGLTexturePiramide);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 60);
	}
	if(figura == "piramide"){
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer_piramide_nivel3);
    
		gl.vertexAttribPointer(shaderProgram_back.vertexPositionAttribute, cubeVertexPositionBuffer_piramide_nivel3.itemSize, gl.FLOAT, false, 0, 0);

		// NEW --- Textures

		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer_piramide_nivel3);
		gl.vertexAttribPointer(shaderProgram_back.textureCoordAttribute, cubeVertexTextureCoordBuffer_piramide_nivel3.itemSize, gl.FLOAT, false, 0, 0);

		gl.activeTexture(gl.TEXTURE0);

		    
		gl.uniform1i(shaderProgram_back.samplerUniform, 0);

		// The vertex indices

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer_piramide_nivel3);

		// Drawing the triangles --- NEW --- DRAWING ELEMENTS 
		gl.bindTexture(gl.TEXTURE_2D, webGLTexturePiramide);
		gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 0);	

		gl.bindTexture(gl.TEXTURE_2D, webGLTexturePiramide);
		gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 6);	

		gl.bindTexture(gl.TEXTURE_2D, webGLTextureV);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 12);


		gl.bindTexture(gl.TEXTURE_2D, webGLTexturePiramide);
		gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 24);

		gl.bindTexture(gl.TEXTURE_2D, webGLTexturePiramide);
		gl.drawElements(gl.TRIANGLES, 3, gl.UNSIGNED_SHORT, 30);
	}
	if(figura == "paralelipipedo"){
		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer_paralelipipedo_nivel3);
    
		gl.vertexAttribPointer(shaderProgram_back.vertexPositionAttribute, cubeVertexPositionBuffer_paralelipipedo_nivel3.itemSize, gl.FLOAT, false, 0, 0);

		// NEW --- Textures

		gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer_paralelipipedo_nivel3);
		gl.vertexAttribPointer(shaderProgram_back.textureCoordAttribute, cubeVertexTextureCoordBuffer_paralelipipedo_nivel3.itemSize, gl.FLOAT, false, 0, 0);

		gl.activeTexture(gl.TEXTURE0);

		    
		gl.uniform1i(shaderProgram_back.samplerUniform, 0);

		// The vertex indices

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer_paralelipipedo_nivel3);

		gl.bindTexture(gl.TEXTURE_2D, webGLTexture1617);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);	

	    gl.bindTexture(gl.TEXTURE_2D, webGLTexturePiramide);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 12);	

		gl.bindTexture(gl.TEXTURE_2D, webGLTextureua);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 24);


		gl.bindTexture(gl.TEXTURE_2D, webGLTexturePiramide);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 36);

		gl.bindTexture(gl.TEXTURE_2D, webGLTextureFilipe);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 48);

		gl.bindTexture(gl.TEXTURE_2D, webGLTextureTiago);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 60);
	}

}

