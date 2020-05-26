class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.6,
        'friction':1.0,
        'density':0.6
    }
    this.body = Bodies.rectangle(x, y, 35, 50, options);
    this.width = 35;
    this.height = 50;
    this.image = loadImage("sprites/box.png");
    World.add(world, this.body);
  }
  display(){

    if(this.body.speed < 6){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }

    if(this.body.speed > 6){
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(255,this.Visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }
  }
};
