function createVehicle(name, distance) {
    const vehicle = {name, distance}
    return {
        ...vehicle,
        ...canMove(vehicle)
    }
}

function canMove({name, distance}) {
    return {
        move: () => console.log(`${name} is moving on ${distance} kilometers`)
    }
}

function createAircraft(name, distance) {
    const vehicle = createVehicle(name, distance)
    return {
        ...vehicle,
        ...canFly(vehicle)
    }
}

function canFly({name, distance}) {
    return {
        fly: () => console.log(`${name} is flying on ${distance} kilometers`)
    }
}

function createAmphibian(name, distance) {
    const vehicle = createVehicle(name, distance)
    return {
        ...vehicle,        
        ...canSail(vehicle),
        ...canFly(vehicle)
    }
}

function canSail({name, distance}) {
    return {
        sail: () => console.log(`${name} is sailing on ${distance} kilometers`)
    }
}

function canHyperJumpAndUnderWater({name, distance}) {
    return {
        hyperJump: () => console.log(`${name} is jumping on ${distance}0000000000000000000000000000000000000000000000000000000 kilometers`),
        underWater: () => console.log(`${name} is sailing under water on ${distance} kilometers`)
    }
}


const vehicle = createVehicle("Cycle", 150)
vehicle.move()

const plane = createAircraft("Airbus A-370", 1100)
plane.fly()
plane.move()

const wonderPlane = createAmphibian("Sea Duck", 675)
wonderPlane.sail();
wonderPlane.fly();

const ultimateVehicle = {...wonderPlane, ...canHyperJumpAndUnderWater(wonderPlane)};
ultimateVehicle.hyperJump();