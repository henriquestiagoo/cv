
/* Texture Background related */

var shaderProgram_back = null;

var cubeVertexTextureCoordBuffer;

//back
var tx_back = 0.0;

var ty_back = 0.0;

var tz_back = 0.0;

var angleXX_back = 0.0;

var angleYY_back = 0.0;

var angleZZ_back = 0.0;

var globalAngleXX_back = 0.0

var globalAngleYY_back = 0.0

var sx_back = 0.25;

var sy_back = 0.25;

var sz_back = 0.25;

var vertices_back = verticesBack();

var textureCoords = textCoord();
       
var cubeVertexIndices = cubeVertexIndex();

//----------------------------------------------------------------------------
//
// The WebGL code
//

// Handling the Vertex and the Color Buffers

function handleLoadedTexture(texture) {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.bindTexture(gl.TEXTURE_2D, null);
}

var webGLTexture;

function initTexture() {
	webGLTexture = gl.createTexture();
	webGLTexture.image = new Image();
	webGLTexture.image.onload = function () {
		handleLoadedTexture(webGLTexture)
	}

	webGLTexture.image.src = "imgs/table.jpg";

	initTextureNivel3();
}


