class Paper {
    constructor() {
      var options = {
           isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(250,540,20,options);
      this.width =33;
      this.image = loadImage("Images/paper.png");
      World.add(world, this.body);

    }

    display(){
      ellipseMode(RADIUS);
      var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, 33,33);
    }
    };