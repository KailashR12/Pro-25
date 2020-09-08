class Paper extends BaseClass{
    constructor (x,y){
        super(x,y,70,70);
        this.image = loadImage("/sprites/paper.png");
       /* var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,25,options);
        this.radius = 25;
        
        this.image = loadImage("/sprites/paper.png");

        World.add(world, this.body);*/
        //this.image = loadImage("../sprites/paper.png");
    }
    display(){
        super.display();
        //var pos =this.body.position;
    //    var angle = this.body.angle;
    
       //rectMode(CENTER);
      // fill("purple");
     //  circle(pos.x,pos.y,this.radius);
      
    }
}
