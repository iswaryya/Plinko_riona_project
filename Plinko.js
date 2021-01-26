class Plinko {

    constructor(x, y, radius ){

        var options = {

            isStatic : true
        }

        this.radius = radius;
        this.body = Bodies.circle(x,y,10,options);
        this.plinko = [];
       
        World.add(world,this.body);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);

        fill("white");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);

        pop();

        // for (var p = 40; p <= width; p = p + 50  ){

        //     plinkos.push(new Plinko(pl, 75));
        // }

        // for (var p = 15; p <= width - 10; p = p + 50  ){

        //     plinkos.push(new Plinko(pl, 75));
        // }

    }
}