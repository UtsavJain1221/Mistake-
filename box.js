class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
  
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var ang=this.body.angle;
push ();
translate(pos.x,pos.y);
rotate (ang);
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y, this.body.width,this.body.height);
    pop ();
  }
};
