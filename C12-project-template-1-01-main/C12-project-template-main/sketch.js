var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  //loadAnimation (carregarAnimação) de corrida para o menino
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("jake1.png", "jake2.png","jake3.png","jake4.PNG", "jake5.png")
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.  
path = createSprite(200,200,400,20)
path.addImage("path", pathImg)
boy = createSprite(180,350,30,30)
boy.addAnimation("boy",boyImg)





path.scale=1.2;

//crie um sprite de menino
//adicione uma animação de corrida para ele
boy.scale=0.5;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visible = false

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = true
//defina visibilidade como falsa para o limite à direita

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com o mouse usando mouseX
  boy.x = World.mouseX

  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
