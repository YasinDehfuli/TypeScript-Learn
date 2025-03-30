"use strict";
class MyList {
    constructor(data, data2) {
        this.data = data;
        this.data2 = data2;
    }
    doAddItem(item) {
        this.data.push(item);
    }
}
let myNumberList = new MyList([1, 2, 3], [true, false]);
myNumberList.doAddItem(4);
console.log(myNumberList.data);
