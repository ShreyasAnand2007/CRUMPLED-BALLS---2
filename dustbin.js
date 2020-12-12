class Dustbin {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      
 display(){
  var angle = this.body.angle;
  fill("white");
  rotate(angle);
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.width, this. height);
  }
};