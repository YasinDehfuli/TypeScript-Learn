"use strict";
let mySearch = (source, subString) => {
    let result = source.search(subString);
    return result > -1;
};
function person(details) {
    console.log('person name is ==>', details.name, 'person email is ==>', details.email, details.phone);
}
let human = { name: 'John', email: 'john@gmail.com' };
let humanWithPhone = { name: 'John', email: 'john@gmail.com', phone: 1234455 };
person(human);
person(humanWithPhone);
class David {
    constructor(name, family, age) {
        this.name = name;
        this.family = family;
        this.age = age;
    }
    nameLogger() {
        console.log(this.name);
    }
}
class Jason {
    constructor(name, family, age, phone) {
        this.name = name;
        this.family = family;
        this.age = age;
        this.phone = phone;
    }
    phoneLogger() {
        console.log(this.phone);
    }
}
const jasonDetails = new Jason('jason', 'alba', 28, 993322);
console.log(jasonDetails);
jasonDetails.phoneLogger();
