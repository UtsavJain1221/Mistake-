class ground{

constructor(){

    var option={
        'isStatic':true,

    }

    this.body=Bodies.rectangle(200,380,400,10,option);
    World.add(world,this.body);
}
display(){

rectMode (CENTER);
fill (0,255,0);
stroke(255);
rect(this.body.position.x,this.body.position.y,this.body.width,this.body.height) 

}

};