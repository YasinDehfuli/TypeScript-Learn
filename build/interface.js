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
