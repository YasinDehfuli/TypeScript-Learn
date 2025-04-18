// Types 🔻
const fullName: string = "John Doe";
const num: number = 5;
const virtual: boolean = false;

const array: any[] = [22, 'string', true]
const arrayNumber: number[] = [22, 33, 44]
const tuple: [number, string] = [22, 'string']

const numBoolean: string | boolean = 'SomeThing'
const nullable: null = nullReturner()
const undefinedVariable: undefined = undefinedReturner()

function logger(message: string): void {
    console.log(message);
}

function nullReturner() {
    return null
}

function undefinedReturner() {
    return undefined
}

// Enums 🔻
enum Direction {
    up = 11,
    down = 22,
    left = 33,
    right = 44,
}

const direction: Direction = Direction.left

function dir(): Direction {
    return Direction.down
}

// Functions 🔻

function sum(x: number, y: number) {
    return x + y;
}

console.log(sum(1, 2))

function sum2(x: number, y?: number) {
    if (y) {
        return x + y;
    }
    return x;
}

console.log(sum2(3))

function sum3(x: number, y: number, ...z: number[]) {
    if (z) {
        return z;
    }
    return x + y;
}

console.log(sum3(12, 22, 12, 12, 12))

// Objects 🔻
type ObjectType = {
    name: string,
    age: number,
    func: (x: number, y: number) => number,
}

const myObject: ObjectType = {
    name: 'John',
    age: 26,
    func: function z(x: number, y: number) {
        return x + y;
    }
}

// Classes 🔻

abstract class Car {
    public model: string
    protected year: number
    name: string

    constructor(model: string, year: number, name: string) {
        this.model = model
        this.year = year
        this.name = name
    }

    abstract engine(carEngine: string): string

    abstract wheels(carWheels: number): number

    getAbstracts(carEngine: string, carWheels: number) {
        console.log(this.engine(carEngine), this.wheels(carWheels))
    }
}

class persianCar extends Car {
    engine(carEngine: string) {
        return carEngine;
    }

    wheels(carWheels: number) {
        return carWheels;
    }
}

let car3 = new persianCar('g-class', 2012, 'Benz')
car3.getAbstracts('2800HP', 6)

// not available anymore
// const car = new Car('206', 2012, 'Peugeot')
