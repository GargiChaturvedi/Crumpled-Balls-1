class Wall {
    //constructing the class
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        //important properties of the body
        var options = {
            isStatic: true
        }
        //creating the wall and adding it to the world
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);
        var pos = this.body.position;
        fill("yellow");
        //creating a rectangle w.r.t the body created
        rect(pos.x, pos.y, this.width, this.height);
    }
}