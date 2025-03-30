interface PersonDetails {
    name: string;
    email: string;
    phone?: number;
}

//  Interface in functions 🔻
interface SearchFunc {
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc = (source: string, subString: string) => {
    let result = source.search(subString)
    return result > -1
}

function person(details: PersonDetails) {
    console.log('person name is ==>', details.name, 'person email is ==>', details.email, details.phone);
}

let human = {name: 'John', email: 'john@gmail.com'};
let humanWithPhone = {name: 'John', email: 'john@gmail.com', phone: 1234455};

person(human)
person(humanWithPhone)


// Interface in class 🔻

interface Person {
    name: string;
    family: string
    age: number;
}

class David implements Person {
    name: string;
    family: string;
    age: number;

    constructor(name: string, family: string, age: number) {
        this.name = name;
        this.family = family;
        this.age = age;
    }

    nameLogger(){
        console.log(this.name)
    }
}

class Jason implements Person {
    name: string;
    family: string;
    age: number;
    phone: number;
    constructor(name: string, family: string, age: number, phone : number) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.phone = phone;
    }

    phoneLogger(){
        console.log(this.phone)
    }
}

const jasonDetails = new Jason('jason', 'alba', 28, 993322)
console.log(jasonDetails)
jasonDetails.phoneLogger()