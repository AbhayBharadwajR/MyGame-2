class Enemy{

    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, options);
        this.width = 10;
        this.height = 10;
        this.image = loadImage("images/enemy.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}