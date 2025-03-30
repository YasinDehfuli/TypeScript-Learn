interface GenericType<T> {
    (data: T): T;
}

interface GenericType2 {
    <T>(data: T): T;
}

let myFunc: GenericType<string>

myFunc = function (data: string): string {
    return data;
}

let myFunc2: GenericType2

myFunc2 = function <T>(data: T): T {
    return data
}