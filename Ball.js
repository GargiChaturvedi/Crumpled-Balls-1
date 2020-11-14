class Ball {
    //constructing the class
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        //important properties of the object
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        //creating the body and added to the world
        this.ball = Bodies.circle(this.x, this.y, this.radius, options);
        World.add(world, this.ball);
    }
    //displaying the ball
    display() {
        ellipseMode(RADIUS);
        var pos = this.ball.position;
        fill("deeppink");
        //ellipse created with respect to the body
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}