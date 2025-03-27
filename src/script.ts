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