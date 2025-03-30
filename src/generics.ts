function sample<T>(data: T): T {
    return data;
}

sample<number>(22)
sample<string>('string sample')
sample<boolean>(true)

let list: number[] = [1, 2, 3, 4]
let list2: Array<string> = ['1', '2', '3']

function logList<T>(data: T[]): T[] {
    return data
}

logList<number>([1, 2, 3, 4])
logList<string>(['1', '2', '3', '4'])




