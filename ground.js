class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(600,590,1000,500,ground_options)
          World.add(world,this.ground);
    }
    display(){
        
       
        fill("yellow");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,1200,20);
    }
}