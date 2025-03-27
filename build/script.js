"use strict";
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
