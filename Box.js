
class Boxes{
    constructor(x,y,width,height){
       var prop = {
           isStatic:true
       }   
       this.body=Bodies.rectangle(x,y,width,height,prop);
       this.width=width;
       this.height=height;
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
     
        translate(pos.x,pos.y);
        //Rotation(this.body.angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
   }
}