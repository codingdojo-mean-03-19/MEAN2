let myStr = 'this is a string';

myStr = 'some other string'; 

// myStr = 234234;

const array: boolStrNum[] = ['dog', 'cat', 'horse'];

array.push(234);
array.push('234');
array.push(true);
// array.push({});

type boolStrNum = string | boolean | number;

const first = array[0];

if (isString(first)) {
  first.charCodeAt(0);
}

function isString(value: any): value is string {
  return typeof value === 'string';
}


// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }


class User {
  constructor(public name: string, public age: number) {

    this.sayHello(name);
  }

  sayHello(name: string): void {
    console.log(`Hello ${name}, I'm ${this.name}`);
  }
}

class Person extends User implements Register {
  confirmationPassword: string;
  email: string;
  password: string;
  
  constructor(name: string, age: number = 34) {
    super(name, age);

    this.sayHello(name);
  }
}

const user = new User('Bob', 23);
const person = new Person('Sally');

person.sayHello(user.name);
user.sayHello(person.name);

interface Login {
  email: string;
  password: string;
}

const login: Login = {
  email: 'aasdfsadf',
  password: 'asdfasdfasdf'
};

interface Register extends Login {
  confirmationPassword: string;
}

const register: Register = {
  email: 'asdfasdf',
  password: 'asdfsadf',
  confirmationPassword: 'asdfasdf'
};