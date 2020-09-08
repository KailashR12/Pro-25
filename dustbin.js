class Dustbin extends BaseClass {
   constructor (x,y,width,height) {
    super(x,y,width, height);
    this.image = loadImage("/sprites/dustbingreen.png");
      /* var options = {
         isStatic:true,
         'restitution':0.8,
         'friction':0.3,
         'density':1.0
       }
      this.body = Bodies.rectangle(x,y,width,height,options) ;
      this.width = width;
      this.height = height;

      World.add(world, this.body);*/
      
   }
   display(){
     /*var pos = this.body.position;
     var angle = this.body.angle;
     // var pos =Matter.Body.position;
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y, this.width, this.height);*/
    //translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
        image(this.image, 600,615, this.width, this.height);
    //super.display();
  }
}