
/* Transformacoes Afins e Projetivas - OpenCV 2016/2017 */

#include <iostream>
#include "opencv2/photo.hpp"
#include "opencv2/core/core.hpp"

#include "opencv2/imgproc/imgproc.hpp"

#include "opencv2/highgui/highgui.hpp"

#include "opencv2/imgcodecs.hpp"

#include <windows.h>

using namespace cv;

using namespace std;

Mat imagemOriginal, matRotation, imgMirror, imgThreshold, imgBorder, imgRotated, imgCartoon, imgResize, imgGray, imagemDetetarArestas, draw , ImgBitwise , imgBlur , imgErode , imgDilate, imgPencilSketch, imgPencilSketchColor;
bool ImageColor = false;
void cartoon();
void saveImg();
void pencilSketch();
void menuBorder();
void menuPencilSketch();
void blur();
void border();
void erode();
void dilate();
void bitwise();
void menuMirrorImg();
void mirrorImg();
void menuBitwise();
void menuTreshold();
void threshold();
void grayscale();
void estilizate();
void resizeImg(bool uniforme);
int rotateRight(int rotate_right,int angle);
int rotateLeft(int rotate_left, int angle);
void rotatecommon(int angle);
bool errorSavingImage(uchar *data);
string verifyIfImageExists(string name);
void tipoImagem();
Mat alterImage();
bool errorAlterImage(uchar *data);

int lerImagem() {
	destroyAllWindows();
	imagemOriginal = matRotation = imgMirror = imgThreshold = imgErode = imgBlur=  imgDilate = imgPencilSketchColor = NULL;
	imgBorder = imgRotated = imgResize = imgGray = imagemDetetarArestas = draw = ImgBitwise = imgPencilSketch = imgCartoon = NULL;
	do {
		printf("\n#######################################\n");
		printf("Para sair escreva 'exit'\n");
		printf("Para listar imagens existentes escreva 'list'\n");
		printf("Nome da imagem (colocar extensao): ");

		string imagem;
		bool existe = true;
		cin >> imagem;
		if (!imagem.compare("list")) {
			HANDLE dir;
			WIN32_FIND_DATA file_data;
			string folder = "Imagens/";
			if ((dir = FindFirstFile((folder + "/*").c_str(), &file_data)) == INVALID_HANDLE_VALUE)
				return 2; /* No files found */

			do {
				const string file_name = file_data.cFileName;
				const string full_file_name = folder + "/" + file_name;
				const bool is_directory = (file_data.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY) != 0;
				if (file_name.compare(".") && file_name.compare("..")  ) {
					printf(file_name.c_str());
					printf("\n");
				}
			} while (FindNextFile(dir, &file_data));
			printf("\n");
			FindClose(dir);
		}
		else {
			if (!imagem.compare("exit")) {
				destroyAllWindows();
				return 1;
			}
			imagem = "Imagens/" + imagem;

			imagemOriginal = imread(imagem, CV_LOAD_IMAGE_UNCHANGED);
			imagemDetetarArestas = imread(imagem, CV_LOAD_IMAGE_COLOR);

			if (!imagemOriginal.data)
			{
				cout << "Ficheiro nao foi aberto ou localizado !!" << endl;
				existe = false;
			}
		}
	} while (!imagemOriginal.data);

	namedWindow("Imagem Original", CV_WINDOW_NORMAL);
	resizeWindow("Imagem Original", imagemOriginal.cols, imagemOriginal.rows); 

	imshow("Imagem Original", imagemOriginal);

	return 0;
}

void menuInicial() {
	printf("\n#######################################\n");
	printf("Transformacoes Afins e Projetivas:\n");
	printf("L - Mudar Imagem\n");
	printf("K - Estilizacao da imagem\n");
	printf("O - Aplicar efeito a lapis na imagem\n");
	printf("D - Imagem a preto e branco\n");
	printf("E - Espelhar Imagem\n");
	printf("T - Definir Threshold\n");
	printf("S - Alterar Tamanho\n");
	printf("X - Rodar para direita\n");
	printf("Y - Rodar para esquerda\n");
	printf("B - Inverter branco com preto\n");
	printf("A - Enevoar imagem\n");
	printf("C - Fazer cartoon da imagem\n");
	printf("F - Aplicar erosao na imagem\n");
	printf("H - Aplicar dilatacao na imagem\n");
	printf("Z - Adicionar moldura a imagem\n");
	printf("G - Guardar Imagem Modificada\n");
	printf("Esc- Sair\n");
	printf("#######################################\n");
}

int main(int argc, char** argv) {

	if (lerImagem() == 1) {
		destroyAllWindows();
		return 0;
	}
	int angle = 0;
	string x = "";
	bool uniforme = false;

	while (true) {
		menuInicial();
		char c = cvWaitKey(0);
		
		switch (c) {
		case 27:
			destroyAllWindows();
			return 0;
			break;
		case 108: // l
			if (lerImagem() == 1) {
				destroyAllWindows();
				return 0;
			}
			break;
		case 98:
			bitwise();
			break;
		case 122:
			border();
			break;
		case 99:
			cartoon();
			break;
		case 97:
			blur();
			break;
		case 102:
			erode();
			break;
		case 104:
			dilate();
			break;
		case 107: // k
			estilizate();
			break;
		case 111: //o
			pencilSketch();
			break;
		case 100: // d
			grayscale();
			break;
		case 101: // e
			cvWaitKey(5);
			mirrorImg();
			break;
		case 120: // x
			int rotate_right;
			printf("Valor da rotacao: ");
			cin >> rotate_right;
			angle = rotateRight(rotate_right,angle);
			break;
		case 121: // y
			int rotate_left;
			printf("Valor da rotacao: ");
			cin >> rotate_left;
			angle = rotateLeft(rotate_left,angle);
			break;
		case 115: // s
			do {
				printf("Uniforme [s/n] : ");
				x = "";
				cin >> x;
				if (x == "n") {
					uniforme = false;
					resizeImg(uniforme);
				}
				else if (x == "s") {
					uniforme = true;
					resizeImg(uniforme);
				}
				else {
					printf("Escrever apenas 's' ou 'n'\n");
				}
			} while (x != "s" && x != "n");
			break;
		case 116: // t
			threshold();
			break;
		case 103: // g
			saveImg();
			break;
		default:
			printf("\nA tecla seleccionada nao faz nada!");
			break;
		}
	}

	destroyAllWindows();
	return 0;
}


int rotateRight(int rotate, int angle) {
	angle -= rotate;
	rotatecommon(angle);
	return angle;
}

int rotateLeft(int rotate, int angle) {
	angle += rotate;
	rotatecommon(angle);
	return angle;
}

void rotatecommon(int angle) {
	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);

	matRotation = getRotationMatrix2D(Point(image.rows / 2, image.cols / 2), angle, 1);
	imgRotated = image.clone();
	warpAffine(image, imgRotated, matRotation, image.size());

	namedWindow("Imagem Rodada", CV_WINDOW_NORMAL);
	resizeWindow("Imagem Rodada", image.cols, image.rows); 

	imshow("Imagem Rodada", imgRotated);
}

void menuMirrorImg() {
	printf("\n0 - Efeito espelhamento em relacao ao eixo x\n");
	printf("1 - Efeito espelhamento em relacao ao eixo y\n");	
	printf("2 - Efeito espelhamento em relacao a ambos os eixos [x/y]\n");
	printf("Opcao: ");
}

void mirrorImg() {
	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);

	imgMirror = image.clone();

	int mirror;

	do {
		menuMirrorImg();
		cin >> mirror;
		if (mirror < 0 || mirror > 2) {
			printf("Escolha um valor entre 0 e 2\n");
		}
	} while (mirror < 0 || mirror > 2);

	if (mirror == 2)
		mirror = -1;
	flip(imgMirror, imgMirror, mirror);
	namedWindow("Mirror", CV_WINDOW_NORMAL);
	resizeWindow("Mirror", imgMirror.cols, imgMirror.rows);

	imshow("Mirror", imgMirror);
}

void menuBitwise() {
	printf("\n0 - Inverter preto com branco \n");
	printf("1 - Somar branco com preto \n");
	printf("2 - Multiplicar branco com preto\n");
	printf("3 - Xor de branco com preto\n");
	printf("Opcao: ");
}

void bitwise() {
	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);

	bitwise_not(image, ImgBitwise);
	namedWindow("Bitwise", CV_WINDOW_NORMAL);
	resizeWindow("Bitwise", ImgBitwise.cols, ImgBitwise.rows);

	imshow("Bitwise", ImgBitwise);
}

void menuBorder() {
	printf("\n#######################################\n");
	printf("1 - Moldura com cor constante\n");
	printf("2 - Moldura com pixeis da imagem replicados\n");
	printf("Opcao: ");
}

void border() {

	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);
	int border;

	do {
		menuBorder();
		cin >> border;
		if (border < 1 || border > 2)
			printf("\nEscolha não é valida, volte a introduzir valor\n");
	} while (border < 1 || border > 2);


	int top, bottom, left, right;

	int borderType;
	if (border == 1)
		borderType = BORDER_CONSTANT;
	else
		borderType = BORDER_REPLICATE;
	Scalar value;
	RNG rng(12345);
	top = (int)(0.05*image.rows); bottom = (int)(0.05*image.rows);
	left = (int)(0.05*image.cols); right = (int)(0.05*image.cols);
	value = Scalar(rng.uniform(30, 100), rng.uniform(200, 150), rng.uniform(140, 50));
	copyMakeBorder(image, imgBorder, top, bottom, left, right, borderType, value);
	namedWindow("Border", CV_WINDOW_NORMAL);
	resizeWindow("Border", imgBorder.cols, imgBorder.rows);

	imshow("Border", imgBorder);
}

void blur() {
	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);

	imgBlur = image.clone();
	medianBlur(image, imgBlur, 7);
	namedWindow("Blur", CV_WINDOW_NORMAL);
	resizeWindow("Blur", imgBlur.cols, imgBlur.rows);

	imshow("Blur", imgBlur);
}

void cartoon() {
	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);
	Mat edge;
	Mat gray;
	Mat blur;
	if (image.channels() == 3) {
		cvtColor(image, gray, COLOR_RGB2GRAY);
		medianBlur(gray, blur, 7);
		adaptiveThreshold(blur, edge, 200, ADAPTIVE_THRESH_MEAN_C, THRESH_BINARY, 9, 2);
		cvtColor(edge, edge, COLOR_GRAY2RGB);
		bitwise_and(image, edge, imgCartoon);
	}
	else if (image.channels() == 1) {
		Mat imageClonada;
		cvtColor(image, imageClonada, COLOR_GRAY2BGR);
		cvtColor(imageClonada, gray, COLOR_RGB2GRAY);
		medianBlur(gray, blur, 7);
		adaptiveThreshold(blur, edge, 255, ADAPTIVE_THRESH_MEAN_C, THRESH_BINARY, 9, 2);
		cvtColor(edge, edge, COLOR_GRAY2BGR);
		bitwise_and(imageClonada, edge, imgCartoon);
	}
	else if (image.channels() == 4) {
		Mat imageClonada;
		cvtColor(image, imageClonada, COLOR_RGBA2RGB);
		cvtColor(image, gray, COLOR_RGBA2GRAY);
		medianBlur(gray, blur, 7);
		adaptiveThreshold(blur, edge, 200, ADAPTIVE_THRESH_MEAN_C, THRESH_BINARY, 9, 2);
		cvtColor(edge, edge, COLOR_GRAY2RGB);
		bitwise_and(imageClonada, edge, imgCartoon);
	}
	namedWindow("Cartoon", CV_WINDOW_NORMAL);
	resizeWindow("Cartoon", image.cols, image.rows);
	imshow("Cartoon", imgCartoon);
}

void erode() {
	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);
	int size;
	printf("\nSize:");
	cin >> size;
	imgErode = image.clone();
	int erosion_type = MORPH_ELLIPSE;
	Mat element = getStructuringElement(erosion_type,Size(2*size+1, 2*size+1),Point(size, size));
	erode(image, imgErode, element);
	namedWindow("Erode", CV_WINDOW_NORMAL);
	resizeWindow("Erode", imgErode.cols, imgErode.rows);
	imshow("Erode", imgErode);
}

void dilate() {
	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);
	int size;
	printf("\nSize:");
	cin >> size;
	imgDilate = image.clone();
	int dilate_type = MORPH_ELLIPSE;
	Mat element = getStructuringElement(dilate_type, Size(2 * size + 1, 2 * size + 1), Point(size, size));
	dilate(image, imgDilate, element);
	namedWindow("Dilate", CV_WINDOW_NORMAL);
	resizeWindow("Dilate", imgDilate.cols, imgDilate.rows);
	imshow("Dilate", imgDilate);
}

void menuTreshold() {
	printf("0 - Binary\n");
	printf("1 - Binary Inverted\n");
	printf("2 - Treshold Truncated\n");
	printf("3 - Treshold to zero\n");
	printf("4 - Treshold to zero (inverted)\n");
	printf("Opcao: ");
}

void threshold() {
	int thresh_type;
	int thresh;
	int maxValue = 0;

	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);

	do {
		menuTreshold();
		cin >> thresh_type;
		if (thresh_type < 0 || thresh_type > 4) {
			printf("Escolha um valor entre 0 e 4\n");
		}
	} while (thresh_type < 0 || thresh_type > 4);

	do {
		printf("Valor do Threshold(0-255): ");
		cin >> thresh;
		if (thresh < 0 || thresh > 255) {
			printf("Escolha um valor entre 0 e 255\n");
		}
	} while (thresh < 0 || thresh > 255);

	if (thresh_type == 0 || thresh_type == 1) {
		do {
			printf("Valor Max(0-255): ");
			cin >> maxValue;
			if (maxValue < 0 || maxValue > 255) {
				printf("Escolha um valor entre 0 e 255\n");
			}
		} while (maxValue < 0 || maxValue > 255);
	}

	threshold(image, imgThreshold, thresh, maxValue, thresh_type);

	namedWindow("Imagem Threshold", CV_WINDOW_NORMAL);
	resizeWindow("Imagem Threshold", imgThreshold.cols, imgThreshold.rows);

	imshow("Imagem Threshold", imgThreshold);
}

void resizeImg(bool uniforme) {

	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);

	if (uniforme == false) {
		imgResize = image.clone();
		int largura;
		int altura;
		int interpolation;
		cout << "Largura:" << endl;
		cin >> largura;
		cout << "Altura:" << endl;
		cin >> altura;
		if ((largura < image.size().width) && (altura < image.size().height))
			interpolation = INTER_AREA;     //Good for downscale
		else
			interpolation = INTER_CUBIC;    //Good for upscale
		resize(image, imgResize, Size(largura, altura), 0, 0, interpolation);
		imshow("Resize", imgResize);
		waitKey(1000);
	}
	else {
		imgResize = image.clone();
		int percentagem;
		int interpolation;
		cout << "Percentagem:" << endl;
		cin >> percentagem;
		int novaLargura = (image.size().width*percentagem) / 100;
		int novaAltura = (image.size().height*percentagem) / 100;

		if ((novaLargura < image.size().width) && (novaAltura < image.size().height))
			interpolation = INTER_AREA;     //Good for downscale
		else
			interpolation = INTER_CUBIC;    //Good for upscale
		resize(image, imgResize, Size(novaLargura, novaAltura), 0, 0, interpolation);
		imshow("Resize", imgResize);
		waitKey(1000);	
	}
}

void grayscale() {
	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);
	
	
	if (image.channels() == 3) {
		cvtColor(imagemOriginal, imgGray, CV_RGB2GRAY);

		namedWindow("GrayScale", CV_WINDOW_NORMAL);
		resizeWindow("GrayScale", imgGray.cols, imgGray.rows);
		imshow("GrayScale", imgGray);
	}
	else if (image.channels() == 4) {
		cvtColor(imagemOriginal, imgGray, CV_RGBA2GRAY);

		namedWindow("GrayScale", CV_WINDOW_NORMAL);
		resizeWindow("GrayScale", imgGray.cols, imgGray.rows);
		imshow("GrayScale", imgGray);
	}
	else
		printf("\nImagem ja esta a preto e branco\n");
}

void estilizate() {
	float sigma_s, sigma_r;
	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);

	if (image.channels() == 4)
		cvtColor(image, image, CV_RGBA2RGB);
	if (image.channels() == 1)
		cvtColor(image, image, CV_GRAY2BGR);
	stylization(image, draw);

	imshow("Estilizacao", draw);	
}

void pencilSketch() {
	float sigma_s, sigma_r;
	int op;
	Mat image;
	do {
		image = alterImage();
		if (!image.data)
			printf("Imagem que pretende alterar nao existe, tente novamente!\n");
	} while (!image.data);
	
	do {
		menuPencilSketch();

		cin >> op;
		if (op < 0 || op > 2) {
			printf("Escolha um valor entre 0 e 2\n");
		}
	} while (op < 0 || op > 2);

	if (image.channels() == 4)
		cvtColor(image, image, CV_RGBA2RGB);
	if (image.channels() == 1) {
		cvtColor(image, image, CV_GRAY2BGR);
	}

	pencilSketch(image, imgPencilSketch , imgPencilSketchColor);
 	
	if (op == 0)
		return;
	if (op == 1) {
		imshow("Pencil Sketch", imgPencilSketch);
		ImageColor = false;
	}
	else if (op == 2) {
		imshow("Pencil Sketch", imgPencilSketchColor);
		ImageColor = true;
	}
}

void menuPencilSketch() {
	printf("\n#######################################\n");
	printf("1 - Imagem a preto e branco\n");
	printf("2 - Imagem a cores\n");
	printf("Opcao: ");
}

void tipoImagem() {
	printf("1 - Imagem Original\n");
	printf("2 - Imagem a preto e branco\n");
	printf("3 - Imagem estilizada\n");
	printf("4 - Imagem Espelhada\n");
	printf("5 - Imagem com Rotacao\n");
	printf("6 - Imagem com Threshold\n");
	printf("7 - Imagem redimensionada\n");
	printf("8 - Imagem com cores invertidas\n");
	printf("9 - Imagem enevoada\n");
	printf("10 - Imagem erodida\n");
	printf("11 - Imagem dilatada\n");
	printf("12 - Imagem com efeito a Lapis\n");
	printf("13 - Cartoon\n");
	printf("14 - Imagem com moldura\n");
	printf("0 - Voltar atras\n");
	printf("#######################################\n");
	printf("Opcao: ");
}

void saveImg() {

	int op = 0;
	do {
		printf("\n#######################################\n");
		printf("Imagem que pretende guardar?\n");
		tipoImagem();
		cin >> op;
		if (op < 0 || op > 14) {
			printf("Escolha um valor entre 0 e 14 \n");
		}
	} while (op < 0 || op > 14);

	string nome = "";
	string nomeFinal = "";
	if (op != 0) {
		printf("Nome com que pertende guardar (s/extensao): ");
		cin >> nome;
		nome += ".jpg";
		nomeFinal = verifyIfImageExists(nome);
		if (nomeFinal == "") {
			return;
		}
	}

	switch (op) {
		case 0:
			return;
		case 1:
			if (errorSavingImage(imagemOriginal.data) == false)
				return;
			imwrite("Imagens/" + nomeFinal, imagemOriginal);
			break;
		case 2:
			if (errorSavingImage(imgGray.data) == false)
				return;
			imwrite("Imagens/" + nomeFinal, imgGray);
			break;
		case 3:
			if (errorSavingImage(draw.data) == false)
				return;
			imwrite("Imagens/" + nomeFinal, draw);
			break;
		case 4:
			if (errorSavingImage(imgMirror.data) == false)
				return;
			imwrite("Imagens/" + nomeFinal, imgMirror);
			break;
		case 5:
			if (errorSavingImage(imgRotated.data) == false) {
				return;
			}
			imwrite("Imagens/" + nomeFinal, imgRotated);
			break;
		case 6:
			if (errorSavingImage(imgThreshold.data) == false) {
				return;
			}
			imwrite("Imagens/" + nomeFinal, imgThreshold);
			break;
		case 7:
			if (errorSavingImage(imgResize.data) == false)
				return;
			imwrite("Imagens/" + nomeFinal, imgResize);
			break;
		case 8:
			if (errorSavingImage(ImgBitwise.data) == false)
				return;
			imwrite("Imagens/" + nomeFinal, ImgBitwise);
			break;
		case 9:
			if (errorSavingImage(imgBlur.data) == false)
				return;
			imwrite("Imagens/" + nomeFinal, imgBlur);
			break;
		case 10:
			if (errorSavingImage(imgErode.data) == false)
				return;
			imwrite("Imagens/" + nomeFinal, imgErode);
			break;
		case 11:
			if (errorSavingImage(imgDilate.data) == false)
				return;
			imwrite("Imagens/" + nomeFinal, imgDilate);
			break;
		case 12:
			if (ImageColor == true) {
				if (errorSavingImage(imgPencilSketchColor.data) == false)
					return;
				imwrite("Imagens/" + nomeFinal, imgPencilSketchColor);
			}
			else {
				if (errorSavingImage(imgPencilSketch.data) == false)
					return;
				imwrite("Imagens/" + nomeFinal, imgPencilSketch);
			}
			break;
		case 13:
			if (errorSavingImage(imgCartoon.data) == false)
				return;
			imwrite("Imagens/" + nomeFinal, imgCartoon);
			break;
		case 14:
			if (errorSavingImage(imgBorder.data) == false)
				return;
			imwrite("Imagens/" + nomeFinal, imgBorder);
			break;
	}
}

bool errorSavingImage(uchar *data) {
	if (!data) {
		printf("Imagem nao foi aberta, impossivel guardar\n");
		return false;
	}
	else {
		return true;
	}
}

Mat alterImage() {
	Mat imagemfalsa;
	int op = 0;
	do {
		printf("\n#######################################\n");
		printf("Imagem que pretende alterar?\n");
		tipoImagem();
		cin >> op;
		if (op < 0 && op > 14)
			printf("Escolha uma valor entre 0 e 14\n");
	} while (op < 0 && op > 14);

	switch (op) {
	case 0:
		return imagemfalsa;
	case 1:
		if (errorAlterImage(imagemOriginal.data) == true)
			return imagemOriginal;
		break;
	case 2:
		if (errorAlterImage(imgGray.data) == true)
			return imgGray;
		break;
	case 3:
		if (errorAlterImage(draw.data) == true)
			return draw;
		break;
	case 4:
		if (errorAlterImage(imgMirror.data) == true)
			return imgMirror;
		break;

	case 5:
		if (errorAlterImage(imgRotated.data) == true)
			return imgRotated;
		break;
	case 6:
		if (errorAlterImage(imgThreshold.data) == true)
			return imgThreshold;
		break;
	case 7:
		if (errorAlterImage(imgResize.data) == true)
			return imgResize;
		break;
	case 8:
		if (errorAlterImage(ImgBitwise.data) == true)
			return ImgBitwise;
		break;
	case 9:
		if (errorAlterImage(imgBlur.data) == true)
			return imgBlur;
		break;
	case 10:
		if (errorAlterImage(imgErode.data) == true)
			return imgErode;
		break;
	case 11:
		if (errorAlterImage(imgDilate.data) == true)
			return imgDilate;
		break;
	case 12:
		if (ImageColor == true) {
			if (errorSavingImage(imgPencilSketchColor.data) == true)
				return imgPencilSketchColor;
		} 
		else {
			if (errorSavingImage(imgPencilSketch.data) == true)
				return imgPencilSketch;
		}
		break;
	case 13:
		if (errorAlterImage(imgCartoon.data) == true)
			return imgCartoon;
		break;
	case 14:
		if (errorAlterImage(imgBorder.data) == true)
			return imgBorder;
		break;
	}
	return imagemfalsa;
}

bool errorAlterImage(uchar *data) {

	if (!data) {
		printf("Imagem nao foi aberta!\n");
		return false;
	}
	else
		return true;
}

string verifyIfImageExists(string name) {
	Mat imagemParaGuardar;
	do {
		string novaImagem = "Imagens/" + name;

		imagemParaGuardar = imread(novaImagem, CV_LOAD_IMAGE_UNCHANGED);
		string continuar;
		if (imagemParaGuardar.data)
		{
			printf("Imagem com esse nome ja existe, pretende substituir ? [s/n] :");
			cin >> continuar;
			if (continuar == "s") {
				return name;
			}
			else if (continuar == "n") {
				printf("Novo nome a ser inserido:");
				cin >> name;
				name += ".jpg";
				cout << "" << endl;
			}
			else {
				printf("Comando inserido desconhecido");
			}
		}
		else {
			return name;
		}
	} while (imagemParaGuardar.data);
	return name;
}