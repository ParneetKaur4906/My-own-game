var form,game;
var playerCount;
var gameState=0;
var database;
function preload() {
    
}

function setup(){
createCanvas(displayWidth-250,displayHeight-600);
database = firebase.database();
    game=new Game();
    game.start();
   
   
}
    

function draw(){
    
    background(255);

    
        game.update(1);
      

    if(gameState === 1){
        game.play();
      }

  
   
    
}