function auth(constructor: any) {
    return class extends constructor {
        auth = false
        phone = 22222
    }
}

@auth
class User {
    name = 'Test';

    constructor(public message: string) {
    }
}

const user = new User('This is a message');
console.log(user)