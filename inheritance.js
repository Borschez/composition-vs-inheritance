class Vehicle {
    constructor(name, distance) {
        this.name = name;
        this.distance = distance;
    }

    move() {
        console.log(`${this.name} is moving on ${this.distance} kilometers`)
    }
}

class Aircraft extends Vehicle {
    fly() {
        console.log(`${this.name} is flying on ${this.distance} kilometers`)
    }
}

class Ship extends Vehicle {
    sail() {
        console.log(`${this.name} is sailing on ${this.distance} kilometers`)
    }
}

class Amphibian extends Aircraft {
    sail() {
        console.log(`${this.name} is sailing on ${this.distance} kilometers`)
    }
}

const plane = new Aircraft("Airbus A-370", 1100)
plane.move()
plane.fly();
const boat = new Ship("Blade", 370)
boat.sail()
const wonderPlane = new Amphibian("Sea Duck", 675)
wonderPlane.sail()
wonderPlane.fly()
