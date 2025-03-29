interface PersonDetails {
    name: string;
    email: string;
    phone?: number;
}

function person(details: PersonDetails) {
    console.log('person name is ==>',details.name, 'person email is ==>', details.email , details.phone);
}

let human = {name : 'John', email : 'john@gmail.com' };
let humanWithPhone = {name : 'John', email : 'john@gmail.com', phone: 1234455 };

person(human)
person(humanWithPhone)