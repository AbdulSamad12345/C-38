var database;
var GameState = 0;
var PlayerCount;

var allPlayers;
var cars,car1,car2,car3,car4;
var form, game, player;
 
function setup(){

    createCanvas(windowWidth-22,windowHeight-30);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    


}


function draw(){


    if(PlayerCount===4){
        game.update(1);

    }
     
    if(GameState===1){
        clear();
        game.play();
    }
}







