class MyList<T, U> {
    constructor(public data: T[], private data2: U[]) {
    }

    doAddItem(item: T) {
        this.data.push(item);
    }
}

let myNumberList: MyList<number, boolean> = new MyList<number, boolean>([1, 2, 3], [true, false]);
myNumberList.doAddItem(4);
console.log(myNumberList.data);
