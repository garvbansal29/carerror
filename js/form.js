class Form{
    constructor(){
        this.title = createElement('H1')
        this.input = createInput('ENTER YOUR NAME')
        this.button = createButton('NEXT')
        this.greeting = createElement('H3')
    }
    display(){
        
        this.title.html('MULTIPLAYER CAR RACER')
        this.title.position(displayWidth/2-50,0)

        
        this.input.position(displayWidth/2-40,displayHeight/2-80)

        
        this.button.position(displayWidth/2+30,displayHeight/2)

        
        
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
           this. greeting.html('HELLO '+player.name);
           this.greeting.position(displayWidth/2-70,displayHeight/4);
        })

    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
        
    }

}