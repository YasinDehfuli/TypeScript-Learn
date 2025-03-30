"use strict";
class MyList {
    constructor(data) {
        this.data = data;
    }
    doAddItem(item) {
        this.data.push(item);
    }
}
let myNumberList = new MyList([1, 2, 3]);
myNumberList.doAddItem(4);
console.log(myNumberList.data);
