class Game {
    constructor(){
    }
    //read the gameState value from the database
    getState(){
        database.ref("gameState").on("value",function(data){
            gameState = data.val()
        })
    }
    //write the gameState value to the database 
    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }
   start(){
       if(gameState===0){
           player=new Player()
           player.getCount()
           form=new Form()
           form.display()
       }
       car1=createSprite(100,200);
       car2=createSprite(300,200);
       car3=createSprite(500,200) ;
       car4=createSprite(700,200);
       car1.addImage(car1img)
       car2.addImage(car2img)
       car3.addImage(car3img)
       car4.addImage(car4img)

       cars=[car1,car2,car3,car4]

   }
   play(){
       form.title.hide()
       form.input.hide()
       form.button.hide()
       form.greeting.hide()
       Player.getPlayersInfo()
       background("grey")
       image(trackimg,0,-height*4,width,height*5)
       if(players!==undefined){
           var index=0
           var x=175
           var y
           for(var i in players ){
               index=index+1
               x=x+250
               y=height-players[i].distance-40
               cars[index-1].x=x
               cars[index-1].y=y
               if(index===player.index){
                   fill("grey")
                   ellipse(x,y,60)
                  
                   camera.position.x=width/2
                   camera.position.y=cars[index-1].y
               }
           }
       }
       player.getcarsAtEnd()
       if(player.distance>4200){
           gameState=2
           player.rank++
           Player.updatecarsAtEnd(player.rank)
       }
       if(keyDown("up") && player.index!==null){
           player.distance=player.distance+10
           player.updateInfo()
       }
       drawSprites();
   }

   end(){
       console.log("GAME OVER")
       console.log(player.rank)
   }
}