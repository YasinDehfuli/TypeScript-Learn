"use strict";
// Types 🔻
const fullName = "John Doe";
const num = 5;
const virtual = false;
const array = [22, 'string', true];
const arrayNumber = [22, 33, 44];
const tuple = [22, 'string'];
const numBoolean = 'SomeThing';
const nullable = nullReturner();
const undefinedVariable = undefinedReturner();
function logger(message) {
    console.log(message);
}
function nullReturner() {
    return null;
}
function undefinedReturner() {
    return undefined;
}
// Enums 🔻
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 11] = "up";
    Direction[Direction["down"] = 22] = "down";
    Direction[Direction["left"] = 33] = "left";
    Direction[Direction["right"] = 44] = "right";
})(Direction || (Direction = {}));
const direction = Direction.left;
function dir() {
    return Direction.down;
}
// Functions 🔻
function sum(x, y) {
    return x + y;
}
console.log(sum(1, 2));
function sum2(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(sum2(3));
function sum3(x, y, ...z) {
    if (z) {
        return z;
    }
    return x + y;
}
console.log(sum3(12, 22, 12, 12, 12));
const myObject = {
    name: 'John',
    age: 26,
    func: function z(x, y) {
        return x + y;
    }
};
