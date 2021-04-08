class Form{
    constructor(){
        this.title=createElement("h1")
        this.input=createInput("Name")
        this.button=createButton("Play")
        this.greeting=createElement("h2")
        this.reset=createButton("Reset")
    }
    display(){   
        this.title.html("Car Racing")
        this.title.position(width/2-50,0)
        this.input.position(width/2-40,height/2-150)
        this.reset.position(width-100,20)
       
        this.button.position(width/2+30,height/2-90)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=  this.input.value()
            playerCount++
            player.index = playerCount
            player.updateCount(playerCount)
            player.updateInfo()   
            this.greeting.html("Hello "+ player.name)
            this.greeting.position(width/2-70,height/4)
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.updateState(0)
            Player.updatecarsAtEnd(0)
        })
        
    }
}