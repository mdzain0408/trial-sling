class stone{
           constructor(x,y){
                  var options = {
                   'restituation':0.4,
                   'friction':1.0,
                   'density:':0.03

                  }
                  this.body = Bodies.rectangle(x,y,10,10,options);
                  this.width = 10;
                  this.height = 10;
                  this.image = loadImage("plucking/stone.png")



           }

           display(){

                var pos = this.body.position
                imageMode(CENTER);
                image(this.image,pos.x,pos.y,65,65)



           }


}