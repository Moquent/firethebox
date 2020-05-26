class Ball{
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':3.0
        }
    
        this.body = Bodies.rectangle(200, 200, 40, 40, options);
        this.width = 40;
        this.height = 40;
        this.image = loadImage("sprites/fire.jpg");
        World.add(world, this.body);
    }

    display(){
        fill("black");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 85, 85);
    }
}