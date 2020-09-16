class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
            
        });
    }


    /*if(gameState===1){
        var watermelon = createSprite(300,200,50,50);
        watermelon.addImage(melon_img);
        var orange = createSprite(400,200,70,70);
        orange.addImage(orange_img);
        var banana = createSprite(350,300,80,80);
        banana.addImage(banana_img);
        var apple = createSprite(450,300,90,90);
        apple.addImage(apple_img);
        drawSprites();
}
*/
start(){
    if(gameState===0){
        form=new Form();
        form.display();
    }
   
    
}
play(){
    form.hide();
    text("hii",400,200)
}

}
    