class MyList<T> {
    constructor(public data: T[]) {}

    doAddItem(item: T) {
        this.data.push(item);
    }
}

let myNumberList: MyList<number> = new MyList<number>([1, 2, 3]);
myNumberList.doAddItem(4);
console.log(myNumberList.data);
