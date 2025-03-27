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
