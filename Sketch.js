//variaveis boliiha
let xBolinha = 300;
let yBolinha = 200;
const diametro = 20;
let velocidadex = 8;//velocidade eixo horizontal da bola
let velocidadey = 6;
//variaveis barra
let raqueteY = 150; //localização da raquete no plano cartesiano
let raqueteX =15; //localização da raquete no plano cartesiano
let raqueteLargura = 15;
let raqueteAltura = 100;
//variaveis do mal

let yRaqueteMalvada = 150; //localização da raquete no plano cartesiano
let xRaqueteMalvada = 573; //localização da raquete no plano cartesiano
let velocidadeMalvadaY;
let chanceDeErrar = 0; //chance do inimigo de errar;

//Placar do Jogo

let pontos = 0;
let pontosMalvados = 0;

//Sons jogo

let raquetada;
let pontuar;
let trilhaSonora;

function setup() {
  createCanvas(600, 400);
  trilhaSonora.loop() //assim que iniciar o jogo, a trilha sonora vai tocar
}

function draw() {
  background(0);
  raquete(raqueteX, raqueteY);
  raquete(xRaqueteMalvada, yRaqueteMalvada);
  moveRaquete();
  moveRaqueteMalvada();
  showBall();
  moveBall();
  colisaoRaquete2(raqueteX , raqueteY);
  colisaoRaquete2(xRaqueteMalvada, yRaqueteMalvada);
  mostraPlacar(pontos, 150, 35);
  mostraPlacar(pontosMalvados, 450, 35);
  marcaPontos();

}
function showBall(){
    circle(xBolinha, yBolinha, diametro);
}
function moveBall(){
    xBolinha += velocidadex;
    yBolinha -= velocidadey;
  //colisão com bordas
  if ( xBolinha > (width -10)|| xBolinha<10){
    velocidadex *= -1;
  }
  if (yBolinha > (height -10 )|| yBolinha<10){
    velocidadey *= -1;
  }
}

function raquete(x , y){
rect(x, y,raqueteLargura,raqueteAltura);
}

function moveRaquete(){
if (keyIsDown(UP_ARROW)){
    raqueteY -=5;
      if(raqueteY > height){ 
    }
    }
   if (keyIsDown(DOWN_ARROW)){
    raqueteY +=5;
  }
}
function colisaoRaquete2(x, y){
    let colidir = false;
    colidir = collideRectCircle(x, y, raqueteLargura, raqueteAltura, xBolinha, yBolinha, 20);
    if (colidir){
      velocidadex*= -1;
      raquetada.play()// faz com que toda vez que sofrer uma raquetada o jogo vai fazer plau
    }
  }

function raqueteInimigo(){
  rect(xRaqueteMalvada, yRaqueteMalvada,raqueteLargura,raqueteAltura);
}
function calculachanceDeErrar(){
  if(pontosMalvados >= pontos){
    chanceDeErrar +=1;
    if (chanceDeErrar>= 39){
      chanceDeErrar =40;
    }
  }
  else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
  }
}
  return chanceDeErrar
}

function moveRaqueteMalvada(){
    calculachanceDeErrar();
   velocidadeY = yBolinha - yRaqueteMalvada - raqueteLargura /2 -30;
   yRaqueteMalvada += velocidadeY + chanceDeErrar;
}


// PLACARA JOGOOOO/

function mostraPlacar(z ,x , y){
 
  textAlign(CENTER)// ALINHA O TEXTO AO CENTRO
  
  fill(255, 153, 0)
  //stroke(255)//contorna de branco o retangulo
  rect((x - 18) , y -025 , 40 , 25)  
  textSize(25) // aumenta o tamanho do texto
  fill(255) //deixa o texto branco
  text(z, x , y )
}
function marcaPontos(){
  if (xBolinha < 10){
    pontosMalvados += 1;
    pontuar.play();
  }
  if (xBolinha> 590){
    pontos+=1;
    pontuar.play();
  }
}

//musiquinhas

function preload(){
  trilhaSonora = loadSound("trilha.mp3");
  pontuar = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}


/*
function colisaoRaquete(){
  if (xBolinha - 10 < raqueteLargura + raqueteX && yBolinha - 10 < raqueteY + raqueteAltura && yBolinha -10 >raqueteY){
    velocidadex *= -1;
  }
  */




